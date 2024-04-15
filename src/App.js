import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import questions from './data/questions.json';
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizEnd(true);
    }
  };

  return (
    <div className="app">
      {quizEnd ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Quiz
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
