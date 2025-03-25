import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Option from '../components/Option';
import Button from '../components/Button';
import styled from 'styled-components';

const ContainerOuter = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ContainerInner = styled.div`
  width: 650px;
`;

const Title = styled.h1`
  color: #4B0082;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const Level = styled.h2`
  margin-bottom: 20px;
  margin-top: 10px;
  font-weight: 900;
`;

const Learn = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out!');
  };

  const handleOptionClick = (optionName) => {
    if (optionName === 'Alphabet') {
      navigate('/alphabet'); // Navigate using React Router
    }
    else if (optionName === 'Words') {
      navigate('/words');
    }
    else if (optionName === 'Sentences') {
      navigate('/sentences');
    }
    else if (optionName === 'Passages') {
      navigate('/passages');
    }
  };

  const handleQuizClick = () => {
    navigate('/quiz');
  }

  return (
    <div>
      <Navbar activePage="Learn" profileImage="https://randomuser.me/api/portraits/men/35.jpg" onLogout={handleLogout} />
      <ContainerOuter>
        <ContainerInner>
          <Title>Let's Learn!</Title>
          <Level>Level 1</Level>
          <p>Choose a section to get started</p>
          <Option optionName="Alphabet" onClick={() => handleOptionClick('Alphabet')} />
          <Option optionName="Words" onClick={() => handleOptionClick('Words')} />
          <Option optionName="Sentences" onClick={() => handleOptionClick('Sentences')} />
          <Option optionName="Passages" />
          <ButtonContainer>
            <Button text="quiz" onClick= {() => handleQuizClick()} />
          </ButtonContainer>

        </ContainerInner>
      </ContainerOuter>
    </div>
  );
};

export default Learn;
