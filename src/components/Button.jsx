// src/components/Button.jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4d3587;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background-color: #392774;
  }
`;

const Button = ({ text, onClick }) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

export default Button;
