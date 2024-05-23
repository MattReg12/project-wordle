import React from 'react';

const GuessInput = function({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState('')

  return (
  <form
    className="guess-input-wrapper"
    onSubmit={(e) => {
      console.log({ guessList })
      e.preventDefault();
      if (guess.length === 5) {
        setGuess('')
        console.log(guess);
        if (!guessList.includes(guess)) {
          let newGuessList = [...guessList];
          newGuessList.push(guess);
          setGuessList(newGuessList);
        }
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
        let nextGuess = e.target.value.toUpperCase();
        setGuess(nextGuess)
      }}
      />
  </form>)
}

export default GuessInput;
