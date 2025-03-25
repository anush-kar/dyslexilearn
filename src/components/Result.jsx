import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const ResultBox = styled.div`
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 30px;
  width: 300px;
  margin-top: 30px;
`;

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const ScoreText = styled.p`
  font-size: 16px;
  margin: 8px 0;
`;

const FinishButton = styled.button`
  background-color: #6C63FF;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 24px;
  font-size: 16px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #4B47E8;
  }
`;

// Helper function to get grade
const getGrade = (score) => {
  if (score < 50) return 'Try Again';
  if (score <= 70) return 'Satisfactory';
  if (score <= 90) return 'Good';
  return 'Excellent';
};

const Result = ({ writingScore, speakingScore }) => {
  const navigate = useNavigate();
  const totalScore = Math.round((writingScore + speakingScore) / 2);
  const grade = getGrade(totalScore);

  return (
    <Container>
      <Heading>LEVEL 1</Heading>
      <h2>Level Completed</h2>
      <ResultBox>
        <h3>{grade}</h3>
        <p><strong>Accuracy</strong></p>
        <ScoreText>Writing: {writingScore}%</ScoreText>
        <ScoreText>Speaking: {speakingScore}%</ScoreText>
        <ScoreText><strong>Total: {totalScore}%</strong></ScoreText>
      </ResultBox>
      <FinishButton onClick={() => navigate('/learn')}>Finish</FinishButton>
    </Container>
  );
};

export default Result;
