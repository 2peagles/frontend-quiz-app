import React,{useState} from 'react'
import '../styles/startmenu.scss'
import '../styles/designsystem.scss'
import Question from './Question'
import data from './data.json'

const quizzes = data.quizzes;

export const Startmenu = () => {
const [selectedQuiz, setSelectedQuiz] = useState(null);

const handleStartQuiz = (quizTitle) => {
  // Set the selected quiz title
  setSelectedQuiz(quizTitle);
};
  return selectedQuiz ? ( <Question quizTitle={selectedQuiz} /> ) : (
    <section id='startmenu'>
      <button className='topgrid themetoggle' type='toggle' ><img src='/assets/images/icon-sun-dark.svg'alt='sunlight bright mode'/><span>toggle</span><img src='/assets/images/icon-moon-dark.svg'alt='moon bright mode'/></button>
      
      <div className='leftgrid'>
        <h1 className='headinglgregular'>Welcome to the <span className='startmenheadingbold headinglgbold'>Frontend Quiz!</span></h1>
        <p className='bodys'>Pick a subject to get started.</p>
      </div>

      <div className='rightgrid'>
        {quizzes.map((quiz, index) => (
          <button key={index} className='btn btnstartmenu headings' onClick={() => handleStartQuiz(quiz.title)}>
            <img src={quiz.icon} alt={quiz.title.toLowerCase()} />
            {quiz.title}
          </button>
        ))}
      </div>
    </section>
  );
};
