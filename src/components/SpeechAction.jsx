// ButtonAction.js
import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MicIcon from '@mui/icons-material/Mic';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { FFmpeg } from "@ffmpeg/ffmpeg";

const ffmpeg = new FFmpeg();
const loadFFmpeg = async () => {
  if (!ffmpeg.loaded) {
    await ffmpeg.load();
  }
};

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${({ $isRecording }) => ($isRecording ? 'red' : '#4B0082')};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ $isRecording }) => ($isRecording ? '#ff4d4d' : '#6A0DAD')};
  }
`;

const RecordingIndicator = styled.div`
  display: ${({ $isRecording }) => ($isRecording ? 'inline-flex' : 'none')};
  align-items: center;
  font-size: 14px;
  color: red;
  animation: ${pulse} 1s infinite;
`;

const SpeechAction = ({ word, setVerificationResult }) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handlePlaySound = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const convertWebmToWav = async (webmBlob) => {
    await loadFFmpeg();
    const webmData = new Uint8Array(await webmBlob.arrayBuffer());
    await ffmpeg.writeFile("input.webm", webmData);
    await ffmpeg.exec(["-i", "input.webm", "-acodec", "pcm_s16le", "-ar", "44100", "-ac", "1", "output.wav"]);
    const wavData = await ffmpeg.readFile("output.wav");
    return new Blob([wavData], { type: "audio/wav" });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: "audio/webm" });

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const wavBlob = await convertWebmToWav(audioBlob);
        sendAudioForVerification(wavBlob);
        audioChunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const sendAudioForVerification = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.wav');
    formData.append('text', word);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/learning/verify-pronunciation`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setVerificationResult(result.isCorrect);
    } catch (error) {
      console.error('Error verifying pronunciation:', error);
      setVerificationResult(null);
    }
  };

  return (
    <ButtonContainer>
      <RecordingIndicator $isRecording={isRecording}>
        <FiberManualRecordIcon /> Recording...
      </RecordingIndicator>
      <ActionButton onClick={handlePlaySound} title="Hear Pronunciation">
        <VolumeUpIcon />
      </ActionButton>
      <ActionButton
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
        onTouchStart={startRecording}
        onTouchEnd={stopRecording}
        $isRecording={isRecording}
        title="Hold to Record"
      >
        <MicIcon />
      </ActionButton>
    </ButtonContainer>
  );
};

export default SpeechAction;
