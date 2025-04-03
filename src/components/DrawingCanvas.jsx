import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
  position: relative;
  border: 2px solid #4B0082;
  border-radius: 8px;
  background: white;
`;

const StyledCanvas = styled.canvas`
  border-radius: 8px;
  cursor: crosshair;
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

const DrawingCanvas = ({ onSubmit }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
  
    // Set white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctxRef.current = ctx;
  }, []);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const drawing = useRef(false);

  const startDrawing = (event) => {
    drawing.current = true;
    const ctx = ctxRef.current;
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  };

  const draw = (event) => {
    if (!drawing.current) return;
    const ctx = ctxRef.current;
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    drawing.current = false;
    ctxRef.current.closePath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const sendCanvasToBackend = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      const formData = new FormData();
      formData.append("image", blob, "drawing.jpg");
      onSubmit(formData);
    }, "image/jpg");
  };

  return (
    <div>
      <CanvasContainer>
        <StyledCanvas
          ref={(canvas) => {
            if (canvas && !ctxRef.current) {
              ctxRef.current = canvas.getContext("2d");
              ctxRef.current.fillStyle = "white";
              ctxRef.current.fillRect(0, 0, canvas.width, canvas.height);
              ctxRef.current.strokeStyle = "black";
              ctxRef.current.lineWidth = 5;
              ctxRef.current.lineCap = "round";
            }
            canvasRef.current = canvas;
          }}
          width={300}
          height={300}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </CanvasContainer>

      <ButtonContainer>
        <ActionButton onClick={sendCanvasToBackend}>Submit Drawing</ActionButton>
        <ActionButton danger onClick={clearCanvas}>Clear</ActionButton>
      </ButtonContainer>
    </div>
  );
};

export default DrawingCanvas;
