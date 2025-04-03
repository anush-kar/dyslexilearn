import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Word from '../components/Word';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  padding: 40px;
`;

const Heading = styled.h1`
  color: #4B0082;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #4B0082;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const WordsPage = () => {
  const navigate = useNavigate();
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/learning/phrases`);
        if (!response.ok) {
          throw new Error('Failed to fetch words');
        }
        const data = await response.json();
        setWords(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar activePage="Learn" profileImage="https://randomuser.me/api/portraits/women/30.jpg" />
      <PageContainer>
        <BackButton onClick={() => navigate('/')}>← WORDS</BackButton>
        <Heading>Phrases</Heading>
        {words.length > 0 ? (
          words.map((word, index) => <Word key={index} word={word.phrase} />)
        ) : (
          <p>No words available.</p>
        )}
      </PageContainer>
    </div>
  );
};

export default WordsPage;
