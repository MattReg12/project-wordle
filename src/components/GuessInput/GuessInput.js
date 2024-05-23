import React from 'react';

const GuessInput = function() {
  const [guess, setGuess] = React.useState('')

  return (
  <form
    className="guess-input-wrapper"
    onSubmit={(e) => {
      e.preventDefault();
      if (guess.length === 5) {
        setGuess('')
        console.log(guess);
      }
    }}
  >
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      required
      minLength={5}
      maxLength={5}
      id="guess-input"
      type="text"
      value={guess}
      onChange={(e) => {
         setGuess(e.target.value.toUpperCase())
      }}
      />
  </form>)
}

export default GuessInput;
