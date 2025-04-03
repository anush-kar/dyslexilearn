import React, { useState } from "react";
import styled from "styled-components";
import FileUploader from "../components/FileUploader"; 
import DrawingCanvas from "../components/DrawingCanvas"; // Import the DrawingCanvas component

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AlphabetDisplay = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: #4B0082;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const ActionButton = styled.button`
  background-color: ${({ danger }) => (danger ? "#DC143C" : "#4B0082")};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: none;
  transition: background 0.3s;

  &:hover {
    background-color: ${({ danger }) => (danger ? "#B22222" : "#6A0DAD")};
  }
`;

const Message = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: ${({ correct }) => (correct ? "green" : "red")};
`;

const getRandomAlphabet = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};

const AlphabetPage = () => {
  const [currentLetter, setCurrentLetter] = useState(getRandomAlphabet());
  const [verificationResult, setVerificationResult] = useState(null);

  const handleCanvasSubmit = async (formData) => {
    formData.append("text", currentLetter);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/learning/verify-letter`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setVerificationResult(result.isCorrect);
    } catch (error) {
      console.error("Error verifying letter:", error);
      setVerificationResult(false);
    }
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("text", currentLetter);
    await handleCanvasSubmit(formData);
  };

  const handleNext = () => {
    setCurrentLetter(getRandomAlphabet());
    setVerificationResult(null); // Reset verification result
  };

  return (
    <PageContainer>
      <AlphabetDisplay>{currentLetter}</AlphabetDisplay>

      <DrawingCanvas onSubmit={handleCanvasSubmit} />

      <ButtonContainer>
        <FileUploader onFileSelect={handleFileUpload} />
        <ActionButton onClick={handleNext}>Next ➡️</ActionButton>
      </ButtonContainer>

      {verificationResult !== null && (
        <Message correct={verificationResult}>
          {verificationResult ? "Correct ✅" : "Incorrect ❌"}
        </Message>
      )}
    </PageContainer>
  );
};

export default AlphabetPage;
