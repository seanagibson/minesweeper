import React from 'react';

const GameButton = function({newGame}){
  return(
    <div>
      <button onClick={newGame}>New Game!</button>
    </div>
  )
};

export default GameButton;
