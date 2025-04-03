import React, { useState } from 'react';
import styled from 'styled-components';
import SpeechAction from './SpeechAction'; // Import the new component

const WordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
`;

const Word = ({ word }) => {
  const [verificationResult, setVerificationResult] = useState(null);

  return (
    <WordContainer>
      <span>{word}</span>
      {
        verificationResult === null ?
        <SpeechAction word={word} setVerificationResult={setVerificationResult} /> : null
      }
      {verificationResult !== null && (
        <p style={{ fontWeight: 'bold', color: verificationResult ? 'green' : 'red' }}>
          {verificationResult ? 'Correct ✅' : 'Incorrect ❌'}
        </p>
      )}
    </WordContainer>
  );
};

export default Word;
