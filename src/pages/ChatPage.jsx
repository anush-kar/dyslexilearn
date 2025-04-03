import React, { useState } from "react";
import styled from "styled-components";

const API_KEY = import.meta.env.VITE_OPENAI_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9fc;
  padding: 20px;
`;

const ChatBox = styled.div`
  width: 400px;
  height: 500px;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background: #4d3587;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 4px;
`;

const Message = styled.div`
  background: ${({ isUser }) => (isUser ? "#4d3587" : "#e5e5ea")};
  color: ${({ isUser }) => (isUser ? "white" : "black")};
  padding: 8px 12px;
  border-radius: 10px;
  margin: 5px 0;
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        }),
      });
      
      const data = await response.json();
      if (data.choices) {
        setMessages([...newMessages, { text: data.choices[0].message.content, isUser: false }]);
      }
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
    }
  };

  return (
    <ChatContainer>
      <ChatBox>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>{msg.text}</Message>
        ))}
      </ChatBox>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <Button onClick={sendMessage}>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chatbot;
