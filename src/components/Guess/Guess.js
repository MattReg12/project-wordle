import React from 'react';
import { range } from '../../utils';

const Guess = function({ guess }) {
  return (
    <p className='guess'>
      {range(0,5).map(i => (
        <span key={i} className='cell'>
          {guess[i] || ''}
        </span>
      ))}
    </p>
  )
}

export default Guess;
