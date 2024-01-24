import { quizData } from "../quizData.js";
import { useState } from "react";
import Question from "./Question.jsx";
import Score from "./Score.jsx";

export default function Quiz() {
  const [ currentQuestion, setCurrentQuestion ] = useState(0)
  const [ userAnswer, setUserAnswer ] = useState([])
  const [ result, setResult ] = useState(false)
  const [ error, setError ] = useState(false)

  function handleAnswerClick(isCorrect) {
    setUserAnswer(prevState => [ ...prevState, isCorrect ])
    setResult(prevState => !prevState)

    if ( error ) {
      setError(prevState => !prevState)
    }

  }

  function handleNextQuestion() {
    if ( result ) {
      setCurrentQuestion(prevState => prevState + 1)
      setResult(prevState => !prevState)
    }
    else {
      setError(prevState => !prevState)
    }
  }

  return (
    <>
      { currentQuestion !== 6 ? (
        <div className="quiz-app">
          <span>Domanda { currentQuestion + 1 } di 6</span>
          <h2 className="quiz-app__question">{ quizData[ currentQuestion ].text }</h2>
          <div className="quiz-app__option">
            <Question currentQuestion={ currentQuestion } onAnswer={ handleAnswerClick } result={ result }/>
          </div>
          <button className="quiz-app__next" onClick={ handleNextQuestion }>Next Question</button>
          { error && ( <span className="quiz-app__error">Select an answer, please.</span> ) }
        </div>
      ) : (
        <Score userAnswer={ userAnswer } setQuestion={ setCurrentQuestion } onUserReset={ setUserAnswer }/>
      ) }
    </>
  )
}