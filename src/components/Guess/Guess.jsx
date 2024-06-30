import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

const emptyWord = '     '

function Guess({ word = emptyWord, answer }) {
  const emptyResults = {
    letter: '',
    status: '',
  }

  const results =
    word === emptyWord
      ? range(word.length).map(() => emptyResults)
      : checkGuess(word, answer)

  return (
    <p className="guess">
      {results.map(({ letter, status }, i) => (
        <span className={`cell ${status}`} key={i}>
          {letter}
        </span>
      ))}
    </p>
  )
}

export default Guess
