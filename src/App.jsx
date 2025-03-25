// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles.js';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Learn from './pages/Learn.jsx';
import AlphabetPage from './pages/AlphabetPage.jsx';
import WordsPage from './pages/WordsPage';
import SentencesPage from './pages/SentencesPage';
import QuizPage from './pages/QuizPage.jsx';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/alphabet" element={<AlphabetPage />} />
        <Route path="/words" element={<WordsPage />} />
        <Route path="/sentences" element={<SentencesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  );
};

export default App;
