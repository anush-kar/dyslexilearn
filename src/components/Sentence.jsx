import React from 'react';
import styled from 'styled-components';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const SentenceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #ccc;
  font-size: 18px;
  margin-bottom: 20px;
  background-color: #fff;
  width: 100%;
`;

const SoundButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4B0082;
  font-size: 24px;
`;

const Sentence = ({ sentence }) => {
  const handlePlaySound = () => {
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <SentenceContainer>
      <span>{sentence}</span>
      <SoundButton onClick={handlePlaySound} title="Hear Sentence">
        <VolumeUpIcon />
      </SoundButton>
    </SentenceContainer>
  );
};

export default Sentence;
