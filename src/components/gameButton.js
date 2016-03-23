import React from 'react';

const GameButton = function({handleClick, text}){
  return(
      <button onClick={handleClick}>{text}</button>
  )
};

export default GameButton;
