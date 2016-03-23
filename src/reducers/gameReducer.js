import {INIT_GAME, GAME_OVER, REVEAL_CELL, REVEAL_ALL_CELLS} from '../actions/actionConstants';
import {initGame, revealMinefieldCells} from './reducerHelper';

const initialState = {
  minefield: [],
  gameStarted: false,
  gameOver: false,
  gameOverMsg: ''
};

function gameReducer(state = initialState, action){
  switch (action.type) {
    case INIT_GAME:
      let newMinefield = initGame([]);
      return Object.assign({}, state, {
        minefield: [...newMinefield],
        gameStarted: true,
        gameOver: false,
        gameOverMsg: ''
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
    default:
      return state;
  }
};

export default gameReducer;
