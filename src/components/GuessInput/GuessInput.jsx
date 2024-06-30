import { useState } from 'react'

function GuessInput({ addGuess, gameStatus }) {
  const [guess, setGuess] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ guess })
    addGuess(guess)
    setGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus !== 'running'}
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        maxLength="5"
        title="5 letter word"
      />
    </form>
  )
}

export default GuessInput
