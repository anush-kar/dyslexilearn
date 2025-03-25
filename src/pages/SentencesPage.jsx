import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sentence from '../components/Sentence';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 40px;
`;

const Heading = styled.h1`
  color: #4B0082;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #4B0082;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const SentencesPage = () => {
  const navigate = useNavigate();

  const sentences = [
    'The happy dog jumped over the small rock and ran toward the big tree.',
    'Lisa and Alice go to school daily.',
    'The cat drank some milk and ate a mouse before sleeping.',
    'The birds sang melodiously as the sun rose in the morning.',
    'Sarah loves to paint pictures of flowers and animals.',
    'John plays the piano beautifully at every family gathering.'
  ];

  return (
    <div>
      <Navbar activePage="Learn" profileImage="https://randomuser.me/api/portraits/women/30.jpg" />
      <PageContainer>
        <BackButton onClick={() => navigate('/')}>← SENTENCES</BackButton>
        <Heading>Sentences</Heading>
        {sentences.map((sentence, index) => (
          <Sentence key={index} sentence={sentence} />
        ))}
      </PageContainer>
    </div>
  );
};

export default SentencesPage;
