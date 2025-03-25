import React from 'react';
import styled from 'styled-components';
import AlphabetBox from '../components/AlphabetBox';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Styled Components
const ContainerOuter = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;
const Container = styled.div`
  
  max-width: 800px;
`;

const Title = styled.h1`
  color: #4B0082;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-top: 32px;
`;

const AlphabetPage = ({ onBack }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <>
        <Navbar activePage="alphabet" />
        <ContainerOuter>
            <Container>
                <Title onClick={onBack}>
                    <ArrowBack />
                    Alphabet
                </Title>
                <Grid>
                    {letters.map((letter) => (
                    <AlphabetBox key={letter} letter={letter} />
                    ))}
                </Grid>
            </Container>
        </ContainerOuter>
    </>
  );
};

export default AlphabetPage;
