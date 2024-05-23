import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import GuessGrid from '../GuessGrid/GuessGrid';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      {/* <GuessGrid /> */}
      <GuessList
        guessList={guessList}
        setGuessList={setGuessList}
      />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
      />
    </>
  )
}

export default Game;
