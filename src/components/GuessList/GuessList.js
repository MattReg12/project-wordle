import React from 'react';


const GuessList = function() {
  const [guessList, setGuessList] = React.useState([]);

  return (
    <div className='guess-results'>
      {guessList.map(guess => {
        <p
          className='guess'
          key={guess}
        >
          {guess}
        </p>;
      })}
    </div>
  )
}
