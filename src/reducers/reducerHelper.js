
export function initGame(minefield){

  for(let row = 0; row < 10; row++){
    var tempRow = [];

    for(let col = 0; col < 10; col++){
      let cell = {
        isRevealed: false,
        contains: '',
        row: row,
        col: col
      };
      tempRow.push(cell);
    }
    minefield.push(tempRow);
  }

  minefield = setMines(minefield);

  return setBoardValues(minefield);
};


function setMines(minefield){
  let numMines = 3;

  while(numMines > 0){
    let mineRow = Math.floor(Math.random() * 10);
    let mineCol = Math.floor(Math.random() * 10);

    minefield[mineRow][mineCol].contains = 'M';

    numMines--;
  }

  return minefield;
};


function setBoardValues(minefield){
  for(var row = 0; row < minefield.length; row++){
    for(var col = 0; col < minefield[row].length; col++){
      calculateCellValues(minefield, row, col);
    }
  }
  return minefield;
};


function calculateCellValues(minefield, row, col){
  let adjacentMines = 0;
  let cell = getCellInfo(minefield, row, col);

  if(!cell || cell.contains === 'M'){
    return;
  }

  let topCell = getCellInfo(minefield, row - 1, col);
  if(topCell && topCell.contains === 'M'){
    adjacentMines++;
  }

  let topLeftCell = getCellInfo(minefield, row - 1, col - 1);
  if(topLeftCell && topLeftCell.contains === 'M'){
    adjacentMines++;
  }

  let topRightCell = getCellInfo(minefield, row - 1, col + 1);
  if(topRightCell && topRightCell.contains === 'M'){
    adjacentMines++;
  }

  let leftCell = getCellInfo(minefield, row, col - 1);
  if(leftCell && leftCell.contains === 'M'){
    adjacentMines++;
  }

  let rightCell = getCellInfo(minefield, row, col + 1);
  if(rightCell && rightCell.contains === 'M'){
    adjacentMines++;
  }

  let bottomCell = getCellInfo(minefield, row + 1, col);
  if(bottomCell && bottomCell.contains === 'M'){
    adjacentMines++;
  }

  let bottomLeftCell = getCellInfo(minefield, row + 1, col - 1);
  if(bottomLeftCell && bottomLeftCell.contains === 'M'){
    adjacentMines++;
  }

  let bottomRightCell = getCellInfo(minefield, row + 1, col + 1);
  if(bottomRightCell && bottomRightCell.contains === 'M'){
    adjacentMines++;
  }

  minefield[row][col].contains = adjacentMines.toString();
};


export function getCellInfo(minefield, row, col){
  if((row < 0) || (col < 0) || row >= minefield.length || col >= minefield[0].length){
    return null;
  }

  return minefield[row][col];
};

export function revealMinefieldCells(minefield){
  let tempMinefield = minefield.slice();

  for(var row = 0; row < tempMinefield.length; row++){
    for(var col = 0; col < tempMinefield[row].length; col++){
      if(!tempMinefield[row][col].isRevealed){
        tempMinefield[row][col].isRevealed = true;
      }
    }
  }
  return tempMinefield;
};
