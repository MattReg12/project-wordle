import React from 'react'

const SadBanner = function({ answer }) {
  return (
    <div class="sad banner">
      <p>Sorry, the correct answer is <strong>{ answer }</strong>.</p>
    </div>
  )
}

export default SadBanner;
