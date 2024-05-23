import React from 'react';
import Guess from  '../Guess/Guess';
import { range } from '../../utils';

const GuessList = function({ guessList }) {

  return (
    <div className='guess-results'>
      {range(0,6).map(i => {
        return (
          <Guess key={i} guess={guessList[i] || ''} />
        );
      })}
    </div>
  )
}

export default GuessList;
