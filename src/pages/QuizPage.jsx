import React, { useState } from 'react';
import Question from '../components/Question';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Result from '../components/Result';

const QuizPage = () => {
  const navigate = useNavigate();
  
  const sentences = [
    'The happy dog jumped over the small rock and ran toward the big tree.',
    'Lisa and Alice go to school daily.',
    'The cat drank some milk and ate a mouse before sleeping.',
    'The boy rode his bicycle around the park with his friends.',
    'She planted beautiful flowers in her garden last spring.'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
        setShowResult(true);
      }
  };

  const [showResult, setShowResult] = useState(false);

  // Simulated scores for demo purposes
  const [writingScore] = useState(67);
  const [speakingScore] = useState(73);

  return (
    <div>
      <Navbar activePage="Learn" profileImage="https://randomuser.me/api/portraits/men/35.jpg" />
      <button onClick={() => navigate('/')}>← Back to Learn</button>
      {showResult ? (
        <Result writingScore={writingScore} speakingScore={speakingScore} />
      ) : (
        <> 
            <h1 style={{ textAlign: 'center' }}>LEVEL 1</h1>
            <Question question={sentences[currentIndex]} qno={currentIndex+1} onSubmit={handleNextQuestion} />
        </>
      )}
    </div>
  );
};

export default QuizPage;
