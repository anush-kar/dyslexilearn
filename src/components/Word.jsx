import React from 'react';
import styled from 'styled-components';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const WordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
`;

const SoundButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #4B0082;
  font-size: 24px;
`;

const Word = ({ word }) => {
  const handlePlaySound = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <WordContainer>
      <span>{word}</span>
      <SoundButton onClick={handlePlaySound} title="Hear Pronunciation">
        <VolumeUpIcon />
      </SoundButton>
    </WordContainer>
  );
};

export default Word;
