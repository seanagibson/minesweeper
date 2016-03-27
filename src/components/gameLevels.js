import React from 'react';

const GameLevels = function({setLevel, data}){
  return (
    <select onChange={(e) => {setLevel(e.target.value)}}>
      {data.map(function(level, index){
        return <option key={index} value={index}>{level.title}</option>;
        })
      }
    </select>
  )
};

export default GameLevels;
