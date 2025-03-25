import React from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* border: 1px solid #ccc; */}
  padding: 16px;
  margin: 8px 0;
  ${'' /* max-width: 450px; */}
  ${'' /* border-radius: 8px; */}
`;

const Button = styled.button`
  background-color: #4B0082;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #6a0dad;
  }
`;

const Option = ({ optionName, onClick }) => {
  return (
    <OptionContainer>
      <span>{optionName}</span>
      <div>
        <Button onClick={onClick}>Learn</Button>
      </div>
    </OptionContainer>
  );
};

export default Option;
