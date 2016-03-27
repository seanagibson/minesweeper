import React from 'react';
import BoardTile from './boardTile';
import GameMsg from './gameMsg';
import GameButton from './gameButton';
import GameLevels from './gameLevels';
import {levels} from '../actions/actionConstants';

const Board = function({minefield, onCellClick, gameMsg, newGame, revealMines, setLevel}){

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
      <div className="buttonContainer">
        <GameLevels data={levels} setLevel={setLevel} />
        <GameButton handleClick={newGame} text={'New Game'}/>
        <GameButton handleClick={revealMines} text={'Reveal Mines'}/>
      </div>
    </div>
  );
};

export default Board;
