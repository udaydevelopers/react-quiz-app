import React from 'react';

function Result({ score, totalQuestions }) {
  return (
    <div className="result">
      <h2>Quiz Result</h2>
      <p>You scored {score} out of {totalQuestions}</p>
    </div>
  );
}

export default Result;
