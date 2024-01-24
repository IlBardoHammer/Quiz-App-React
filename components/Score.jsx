import { quizData } from "../quizData.js";
import { useState } from "react";

export default function Score({ userAnswer, setQuestion, onUserReset }) {

  const correctAnswer = userAnswer.filter(answer => answer === true).length // conto il numero di risposte === true

  let renderText = '';

  function calculateScore() {
    if ( correctAnswer <= 2 ) {
      renderText = `Il calcio non è roba per te.`
      return ( 'less' )
    }
    else if ( correctAnswer <= 4 ) {
      renderText = `Sei il classico italiano con la conoscenza da Bar di provincia.`
      return ( 'medium' )
    }
    else {
      renderText = `Questo quiz ti sta stretto, meriti altri palcoscenici!`;
      return ( 'good' )
    }
  }

  function handleReset() {
    setQuestion(0)
    onUserReset([])
  }

  return (
    <div className="score-container">
      <p className={ calculateScore() }>{ `Hai effettuato ${ correctAnswer } risposte corrette su ${ quizData.length }:`}
        <br/>
        <span className="score-span">{ renderText }</span>
      </p>
      <button className="score-reset" onClick={ handleReset }>Reset</button>
    </div>
  )
}