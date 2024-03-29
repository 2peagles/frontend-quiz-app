import React, { useState } from 'react';
import data from './data.json';
import '../styles/designsystem.scss';
import '../styles/question.scss';

const Question = ({ quizTitle, setShowScore, score, setScore, setShowNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentQuiz = data.quizzes.find((quiz) => quiz.title === quizTitle);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;
    setScore(isCorrect ? score + 1 : score);

    // Move to the next question or show the score
    if (currentQuestionIndex + 1 < currentQuiz.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowNextQuestion(false);
      setShowScore(true);
    }
  };

  return (
    <div className='maingrid questionscontainer'>
      <div>
        <span className='topleftgrid headings'>{currentQuiz.title}</span>
        <button className='topgrid'>toggle</button>
      </div>

      <div className='leftgrid'>
        <p className='bodys'>Question {currentQuestionIndex + 1} out of {currentQuiz.questions.length}</p>
        <h2 className='headingm'>{currentQuestion.question}</h2>
        <div className='progressbar' style={{ width: `${(currentQuestionIndex + 1) / currentQuiz.questions.length * 100}%` }}></div>
      </div>

      <div className='rightgrid'>
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => setSelectedAnswer(option)} className='btn btn_questions headings'>
            {option}
          </button>
        ))}
        <button className='btn btn_submit headings' onClick={handleSubmit}>
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default Question;
