import React from 'react';

const BoardTile = function({cellData, onCellClick}){

  return (
    <div className="boardTile">
      {!cellData.isRevealed ? <img src='../assets/minesweeper.png' onClick={onCellClick.bind(null, cellData.row, cellData.col)}/> : cellData.contains === '0' ? '' : cellData.contains}
    </div>)
};

export default BoardTile;
