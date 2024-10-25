import React, { useState } from 'react';

function Quiz({ questions, onComplete }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            onComplete(score);
        }
    };

    return (
        <div className="quiz">
            <h2>{questions[currentQuestionIndex].question}</h2>
            {questions[currentQuestionIndex].options.map((option) => (
                <button key={option} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Quiz;
