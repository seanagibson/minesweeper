import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SKILL_LEVEL, GAME_MODES } from '../constants';
import theme from './styles/Theme';
import GameBoard from './GameBoard';
import { initGameBoard, revealMinefieldTiles, recursiveTileReveal } from '../utilityFunctions';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Wallpoet');
  html{
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'sans serif';
  }
`;

class App extends Component {
  state = {
    gameMode: GAME_MODES['LOADED'],
    skillLevel: SKILL_LEVEL['EASY'],
    minefield: [],
    flagsRemaining: SKILL_LEVEL['EASY'].numMines,
    timer: 0
  };

  componentDidMount() {
    let minefield = initGameBoard(this.state.skillLevel);
    this.setState((state, props) => ({ minefield, gameMode: GAME_MODES['STARTED'] }), this.startTimer);
  }

  onTileClick = (e, row, column) => {
    const { button } = e;
    let { minefield } = this.state;
    if (button === 2) {
      if (minefield[row][column].hasFlag) {
        minefield[row][column].hasFlag = false;
      } else {
        minefield[row][column].hasFlag = true;
      }
      this.setState({ minefield });
    } else {
      if (minefield[row][column].hasMine) {
        const revealedMinefield = revealMinefieldTiles(minefield);
        this.setState((state, props) => ({ minefield: revealedMinefield, gameMode: GAME_MODES['GAME_OVER'] }));
      } else {
        const updatedMinefield = recursiveTileReveal(minefield, row, column);
        this.setState({ minefield: updatedMinefield });
      }
    }
  };

  intervalHandler;

  startTimer = () => {
    this.intervalHandler = setInterval(this.timerTick, 1000);
  };

  stopTimer = () => {
    clearInterval(this.intervalHandler);
  };

  timerTick = () => {
    let { timer } = this.state;
    this.setState({ timer: timer + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <GameBoard
            minefield={this.state.minefield}
            columns={this.state.skillLevel.numColumns}
            rows={this.state.skillLevel.numRows}
            flagsRemaining={this.state.flagsRemaining}
            timer={this.state.timer}
            onTileClick={this.onTileClick}
          />
        </ThemeProvider>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;
