import { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Banner from '../Banner'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS))
  const [guesses, setGuesses] = useState([])
  const [gameStatus, setGameStatus] = useState('running')
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer })

  function addGuess(guess) {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)
    if (guess === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  function restartGame() {
    setAnswer(sample(WORDS))
    setGuesses([])
    setGameStatus('running')
  }

  return (
    <>
      {gameStatus !== 'running' && (
        <button onClick={restartGame}>Restart game</button>
      )}

      <GuessResults guesses={guesses} answer={answer} />

      <GuessInput addGuess={addGuess} gameStatus={gameStatus} />

      {gameStatus === 'lost' && (
        <Banner mood="sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}

      {gameStatus === 'won' && (
        <Banner mood="happy">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </Banner>
      )}
    </>
  )
}

export default Game
