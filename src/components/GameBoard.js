import React from 'react';
import StyledGame from './styles/StyledGame';
import StyledGameBoard from './styles/StyledGameBoard';
import BoardTile from './BoardTile';
import StyledHeader from './styles/StyledHeader';
import FlagCounter from './FlagCounter';
import TimerCounter from './TimerCounter';

const GameBoard = ({ minefield, columns, rows, flagsRemaining, timer, onTileClick }) => (
  <StyledGame>
    <StyledHeader>
      <FlagCounter flagsRemaining={flagsRemaining} />
      <TimerCounter timer={timer} />
    </StyledHeader>
    <StyledGameBoard columns={columns} rows={rows}>
      {minefield.map(row => {
        return row.map(tile => {
          return <BoardTile key={`${tile.row}-${tile.column}`} tile={tile} onTileClick={onTileClick} />;
        });
      })}
    </StyledGameBoard>
  </StyledGame>
);

export default GameBoard;
