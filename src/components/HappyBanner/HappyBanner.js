import React from 'react'

const HappyBanner = function({ guessCount }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guessCount} guesses</strong>.
      </p>
    </div>
  )
}

export default HappyBanner;
