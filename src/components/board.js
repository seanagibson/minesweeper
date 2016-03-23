import React from 'react';
import BoardTile from './boardTile';
import GameMsg from './gameMsg';
import GameButton from './gameButton';

const Board = function({minefield, onCellClick, gameMsg, newGame}){

  return (
    <div className="container">
      <GameMsg gameMsg={gameMsg}/>
      <table>
        <tbody>
          {minefield.map(function(row, rowIndex){
            return(
              <tr key={rowIndex}>
              {row.map(function(cell, colIndex){
                return(
                  <td key={'' + rowIndex + ',' + colIndex} data-row={rowIndex} data-col={colIndex}><BoardTile cellData={cell} onCellClick={onCellClick}/></td>
                )
              })}
              </tr>)
            })}
        </tbody>
      </table>
      <GameButton newGame={newGame}/>
    </div>
  );
};

export default Board;
