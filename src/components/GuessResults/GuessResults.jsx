import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess
          answer={answer}
          key={crypto.randomUUID()}
          word={guesses[i]}
        ></Guess>
      ))}
    </div>
  )
}

export default GuessResults
