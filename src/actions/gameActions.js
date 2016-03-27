import * as actions from './actionConstants';
import {getCellInfo} from '../reducers/reducerHelper';

export function initGameBoard(level){
  return {
    type: actions.INIT_GAME,
    level
  }
};

export function setLevel(level){
  return {
    type: actions.SET_LEVEL,
    level
  }
};

export function startNewGame(){
  return {
    type: actions.INIT_GAME
  }
};

export function gameOver(){
  return {
    type: actions.GAME_OVER
  }
};

export function revealCell(row, col){
  return {
    type: actions.REVEAL_CELL,
    row: Number(row),
    col: Number(col)
  }
};

export function revealAllCells(){
  return {
    type: actions.REVEAL_ALL_CELLS
  }
};

export function recursivelyRevealCells(row, col){
  return {
    type: actions.RECURSIVE_REVEAL_CELLS,
    row: Number(row),
    col: Number(col)
  }
};

export function checkCellContents(row, col){
  return function(dispatch, getState){
    const {minefield} = getState().game;
    let cell = getCellInfo(minefield, row, col);

    if(cell && cell.contains === 'M'){
      dispatch(revealCell(row, col));
      dispatch(gameOver());
      dispatch(revealAllCells());
    } else if(cell && cell.contains === '0'){
      dispatch(recursivelyRevealCells(row, col));
    }
    else {
      dispatch(revealCell(row, col));
    }
  }
}
