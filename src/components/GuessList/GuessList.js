import React from 'react';


const GuessList = function({ guessList }) {

  return (
    <div className='guess-results'>
      {guessList.map(guess => {
        return (<p
          className='guess'
          key={guess}
        >
          {guess}
        </p>);
      })}
    </div>
  )
}

export default GuessList;
