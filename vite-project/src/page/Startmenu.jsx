import React,{useState} from 'react'
import '../styles/startmenu.scss'
import '../styles/designsystem.scss'
import Question from './Question'

export const Startmenu = () => {
  const [startQuiz, setStartQuiz]=useState(null);
  const handleStartQuiz = () => {
  if (startQuiz !== null) {
 // If a button has been clicked, start the quiz and go to questions
  setStartQuiz(true);
  }
};
  return startQuiz ? ( <Question/> ) : (
    <section id='startmenu'>
      <button className='topgrid' type='toggle' ><img src='/assets/images/icon-sun-dark.svg'alt='sunlight bright mode'/><span>toggle</span><img src='/assets/images/icon-moon-dark.svg'alt='moon bright mode'/></button>
      
      <div className='leftgrid'>
        <h1 className='headinglgregular'>Welcome to the <span className='startmenheadingbold headinglgbold'>Frontend Quiz!</span></h1>
        <p className='bodys'>Pick a subject to get started.</p>
      </div>

      <div className='rightgrid'>
        <button className='btn btnstartmenu headings' onClick={handleStartQuiz}> <img src='/assets/images/icon-html.svg' alt='html'/>HTML</button>
        <button className='btn btnstartmenu headings' onClick={handleStartQuiz}> <img src='/assets/images/icon-css.svg' alt='css'/>CSS</button>
        <button className='btn btnstartmenu headings' onClick={handleStartQuiz}> <img src='/assets/images/icon-js.svg' alt='js'/>JAVASCRIPT</button>
        <button className='btn btnstartmenu headings' onClick={handleStartQuiz}> <img src='/assets/images/icon-accessibility.svg' alt='accessibility'/>ACCESSIBILITY</button>
      </div>
    </section>
  );
};

// import React from 'react'
// import Question from './Question'

// export const Startmenu = () => {
//   return (
//     <div><Question/></div>
//   )
// }
