// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f9f9fc;
`;

const Content = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
`;

const TextSection = styled.div`
  max-width: 400px;
`;

const Heading = styled.h1`
  color: #4d3587;
  font-size: 48px;
  margin-bottom: 16px;
`;

const SubText = styled.p`
  color: #333;
  font-size: 18px;
  margin-bottom: 24px;
`;

const Illustration = styled.img`
  width: 350px;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <TextSection>
          <Logo />
          <Heading>The Learning App</Heading>
          <SubText>For dyslexic learners</SubText>
          <Button text="Get Started" onClick={() => navigate("/login")} />;
        </TextSection>
        <Illustration src="src\assets\illustration.svg" alt="Illustration" />
      </Content>
    </Container>
  );
};

export default Home;
