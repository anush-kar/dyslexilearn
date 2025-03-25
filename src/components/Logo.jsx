// src/components/Logo.jsx
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 900;
  color: #4d3587;
`;

const TextContainer = styled.div`
  margin-left: 10px;
`

const Logo = ({ text = "DyslexiLearn" }) => (
  <LogoContainer>
    <img src={logo} alt="DyslexiLearn Logo"/>
    <TextContainer>{text}</TextContainer>
  </LogoContainer>
);

export default Logo;
