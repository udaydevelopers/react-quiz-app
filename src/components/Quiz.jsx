import React from 'react';
import Question from './Question';

function Quiz({ question, onAnswer }) {
  return (
    <div className="quiz">
      <Question question={question} onAnswer={onAnswer} />
    </div>
  );
}

export default Quiz;
