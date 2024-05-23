import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { BLANK_GUESS_ARRAY } from '../../constants';

const Guess = function({ guess, answer }) {
  let guessArr = checkGuess(guess, answer) ?? BLANK_GUESS_ARRAY;

  return (
    <p className='guess'>
      {guessArr.map((guess, i) => (
        <span key={guess.letter + i || i} className={`cell ${guess.status}`}>
          {guess.letter}
        </span>
      ))}
    </p>
  )
}

export default Guess;
