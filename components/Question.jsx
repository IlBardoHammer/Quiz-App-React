import { quizData } from "../quizData.js";

export default function Question({ currentQuestion, onAnswer, result }) {
  return (
    <>
      { quizData[ currentQuestion ].answers.map((option, index) => {
        return (
          <button disabled={ result }
                  className={ `button-option${ !result ? '' : ( option.isCorrect ? '--green' : '--red' ) }` }
                  key={ index }
                  onClick={ () => onAnswer(option.isCorrect) }>
            { option.text }
          </button>
        )
      }) }
    </>
  )

}