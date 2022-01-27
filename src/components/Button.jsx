import React from 'react';

const Button = ({ clicked }) => {
  return (
  <div>
      <button className='button ' onClick={clicked} > Update </button>
  </div>);
};

export default Button;
