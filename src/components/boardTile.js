import React from 'react';

const BoardTile = function({cellData, onCellClick}){
  return (
    <div>
      {cellData.isRevealed === true ? cellData.contains : <img src='../assets/minesweeper.png' onClick={onCellClick.bind(null, cellData.row, cellData.col)}/>}
    </div>
  );
};

export default BoardTile;
