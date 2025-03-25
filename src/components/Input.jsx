// src/components/Input.jsx
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

const Input = ({ label, type, placeholder }) => (
  <InputContainer>
    {label && <Label>{label}</Label>}
    <StyledInput type={type} placeholder={placeholder} />
  </InputContainer>
);

export default Input;
