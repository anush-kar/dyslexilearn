import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Word from '../components/Word';
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

const WordsPage = () => {
  const navigate = useNavigate();

  const difficultWords = [
    'aLReaDY',
    'CounTRY',
    'DIFFeRenT',
    'ScHooL',
    'unDeRSTanD',
    'RecOGniZE',
    'aChieveMENT',
    'MiNUTE',
    'DeVelop',
    'EXpeRiMenT'
  ];

  return (
    <div>
      <Navbar activePage="Learn" profileImage="https://randomuser.me/api/portraits/women/30.jpg" />
      <PageContainer>
        <BackButton onClick={() => navigate('/')}>← WORDS</BackButton>
        <Heading>Words</Heading>
        {difficultWords.map((word, index) => (
          <Word key={index} word={word} />
        ))}
      </PageContainer>
    </div>
  );
};

export default WordsPage;
