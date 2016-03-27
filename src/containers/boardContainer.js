import {connect} from 'react-redux';
import Board from '../components/board';
import {checkCellContents, startNewGame, revealAllCells, setLevel} from '../actions/gameActions';

function mapStateToProps(state){
  return {
    minefield: state.game.minefield,
    gameMsg: state.game.gameOverMsg
  }
}

function mapDispatchToProps(dispatch){
  return {
    onCellClick: function(row, col){
      dispatch(checkCellContents(row, col));
    },
    newGame: function(){
      dispatch(startNewGame());
    },
    revealMines: function(){
      dispatch(revealAllCells());
    },
    setLevel: function(level){
      dispatch(setLevel(level))
    }
  }
}

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
