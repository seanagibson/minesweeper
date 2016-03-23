import * as actions from './actionConstants';
import {getCellInfo} from '../reducers/reducerHelper';

export function initGameBoard(){
  return {
    type: actions.INIT_GAME
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
    row: row,
    col: col
  }
};

export function revealAllCells(){
  return {
    type: actions.REVEAL_ALL_CELLS
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
    } else {
      dispatch(revealCell(row, col));
    }
  }
}
