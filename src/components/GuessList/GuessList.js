import React from 'react';
import Guess from  '../Guess/Guess';
import { range } from '../../utils';

const GuessList = function({ guessList, answer }) {

  return (
    <div className='guess-results'>
      {range(0,6).map(i => {
        return (
          <Guess key={i} guess={guessList[i] || ''} answer={answer}/>
        );
      })}
    </div>
  )
}

export default GuessList;
