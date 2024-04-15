import React, { useState, useEffect } from 'react';

function Question({ question, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    let timeoutId;
    if (selectedAnswer !== null) {
      timeoutId = setTimeout(() => {
        onAnswer(question.answers[selectedAnswer].isCorrect);
        setSelectedAnswer(null);
      }, 1000); // Auto next after 1 second
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedAnswer, question.answers, onAnswer]);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  return (
    <div className="question">
      <h2>{question?.qsn}. {question.text}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                checked={selectedAnswer === index}
                onChange={() => handleAnswerClick(index)}
              />
              {answer.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
