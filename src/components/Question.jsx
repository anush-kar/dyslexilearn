import React from 'react';
import styled from 'styled-components';
import UploadIcon from '../assets/upload_vector.svg';
import MicIcon from '../assets/mic_icon.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SentenceBox = styled.div`
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  width: 80%;
  text-align: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #4B0082;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 24px;
  font-size: 16px;
  margin: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgb(58, 0, 100);
  }

  svg {
    margin-right: 8px;
  }
`;

const SubmitButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const AnswerBox = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

const Question = ({ question, qno ,onSubmit }) => {
  
  const handleUploadClick = () => {
    alert('Upload Picture functionality is not implemented yet.');
  };

  const handleSpeakClick = () => {
    alert('Voice recording functionality is not implemented yet.');
  };

  return (
    <Container>
      <h2>Question {qno}</h2>
      <SentenceBox>{question}</SentenceBox>
      <AnswerBox>
        <Button onClick={handleUploadClick}>
          <img className="icon" src={UploadIcon} width={20} alt="upload icon"/> Upload Picture
        </Button>
        <Button onClick={handleSpeakClick}>
          <img className="icon" src={MicIcon} width={20} alt="mic icon" /> Speak
        </Button>
      </AnswerBox>
      <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
    </Container>
  );
};

export default Question;
