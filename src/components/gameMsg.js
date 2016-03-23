import React from 'react';

const GameMsg = function({gameMsg}){
  return (
    <div>
      {gameMsg !== '' ? <h2>{gameMsg}</h2> : ''}
    </div>
  )
};

export default GameMsg;
