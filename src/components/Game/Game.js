import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import HappyBanner from '../HappyBanner/HappyBanner'
import SadBanner from '../SadBanner/SadBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [guessCount, setGuessCount] = React.useState(0);
  let banner;

  if (guessList.includes(answer)) {
    banner = <HappyBanner guessCount={guessCount} />
  } else if (guessCount === 6) {
    banner = <SadBanner answer={answer} />
  }

  return (
    <>
      <GuessList
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
      />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        guessCount={guessCount}
        setGuessCount={setGuessCount}
      />
      {banner}
    </>
  )
}

export default Game;
