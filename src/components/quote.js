import React from 'react';

const Quote = (props) => {
  return (
    <div>
      <h4>{props.quote}</h4>
      <p>{props.author}</p>
    </div>
  )
}

export default Quote;

