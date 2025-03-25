import React from 'react';
import styled from 'styled-components';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

// Styled component for the Alphabet Box
const Box = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #555;
`;

const AlphabetBox = ({ letter }) => {
  const handlePlaySound = () => {
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  }

  return (
    <Box>
      {letter}{letter.toLowerCase()} 
      <IconWrapper onClick={handlePlaySound}>
        <VolumeUpIcon fontSize="small" />
      </IconWrapper>
    </Box>
  );
};

export default AlphabetBox;
