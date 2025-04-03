import React, { useState } from "react";
import styled from "styled-components";

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadButton = styled.label`
  background-color: #4B0082;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  transition: background 0.3s;

  &:hover {
    background-color: #6A0DAD;
  }
`;

const FileName = styled.span`
  font-size: 14px;
  color: #333;
`;

const FileUploader = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <FileInputContainer>
      <HiddenInput type="file" id="fileUpload" onChange={handleFileChange} />
      <UploadButton htmlFor="fileUpload">Choose File</UploadButton>
      {fileName && <FileName>{fileName}</FileName>}
    </FileInputContainer>
  );
};

export default FileUploader;
