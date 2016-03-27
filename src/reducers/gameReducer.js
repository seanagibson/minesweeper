import {INIT_GAME, GAME_OVER, REVEAL_CELL, REVEAL_ALL_CELLS, RECURSIVE_REVEAL_CELLS, SET_LEVEL, levels} from '../actions/actionConstants';
import {initGame, revealMinefieldCells, recurseReveal} from './reducerHelper';

const initialState = {
  minefield: [],
  level: levels[0].title,
  mines: levels[0].mines,
  gameStarted: false,
  gameOver: false,
  gameOverMsg: ''
};

function gameReducer(state = initialState, action){
  switch (action.type) {
    case INIT_GAME:
      let newMinefield = initGame([], state.mines);
      return Object.assign({}, state, {
        minefield: [...newMinefield],
        gameStarted: true,
        gameOver: false,
        gameOverMsg: ''
      });

    case SET_LEVEL:
console.log('level, title: ', action.level, levels[action.level].title);
      return Object.assign({}, state, {
        level: levels[action.level].title,
        mines: levels[action.level].mines
      });

    case GAME_OVER:
      return Object.assign({}, state, {
        gameStarted: false,
        gameOver: true,
        gameOverMsg: 'GAME OVER!'
      });

    case REVEAL_CELL:
      let updatedMinefield = state.minefield.slice();
      let newCell = updatedMinefield[action.row][action.col];
      newCell.isRevealed = true;
      updatedMinefield[action.row][action.col] = newCell;
      return Object.assign({}, state, {
        minefield: [...updatedMinefield]
      });

    case REVEAL_ALL_CELLS:
      let revealMinefield = revealMinefieldCells(state.minefield);
      return Object.assign({}, state, {
        minefield: [...revealMinefield]
      });

    case RECURSIVE_REVEAL_CELLS:
      let recursedMinefield = recurseReveal(state.minefield, action.row, action.col);
      return Object.assign({}, state, {
        minefield: [...recursedMinefield]
      });
    default:
      return state;
  }
};

export default gameReducer;
