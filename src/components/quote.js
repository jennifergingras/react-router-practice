import React from 'react';

const Quote = (props) => {
  return (
    <div>
      <h4>Quote: {props.quote}</h4>
      <p>Author: {props.author}</p>
    </div>
  )
}

export default Quote;

