export const initGameBoard = (skillLevel = requiredParam('skillLevel')) => {
  const { numColumns, numRows, numMines } = skillLevel;
  let minefield = [...Array(numRows)].map(r =>
    [...Array(numColumns)].map(
      cell =>
        (cell = {
          isOpen: false,
          hasMine: false,
          hasFlag: false,
          numNeighborMines: 0,
          row: 0,
          column: 0
        })
    )
  );

  setMines([...minefield], numMines, numRows, numColumns);

  return updateTiles(minefield, numRows, numColumns);
};

const setMines = (
  minefield = requiredParam('minefield'),
  numMines = requiredParam('mines'),
  numRows = requiredParam('numRows'),
  numColumns = requiredParam('numColumns')
) => {
  let minefieldWithMines = [...minefield];
  let mineTotal = numMines;
  while (mineTotal > 0) {
    let mineRow = Math.floor(Math.random() * numRows);
    let mineCol = Math.floor(Math.random() * numColumns);
    if (!minefieldWithMines[mineRow][mineCol].hasMine) {
      minefieldWithMines[mineRow][mineCol].hasMine = true;
    }
    mineTotal = mineTotal - 1;
  }
};

const updateTiles = (
  minefield = requiredParam('minefield'),
  numRows = requiredParam('numRows'),
  numColumns = requiredParam('numColumns')
) => {
  minefield.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      col.row = rowIndex;
      col.column = colIndex;
      calculateTileNeighborMines(minefield, rowIndex, colIndex, numRows, numColumns);
    });
  });

  return minefield;
};

const calculateTileNeighborMines = (
  minefield = requiredParam('minefield'),
  rowIndex = requiredParam('rowIndex'),
  colIndex = requiredParam('colIndex'),
  numRows = requiredParam('numRows'),
  numColumns = requiredParam('numColumns')
) => {
  let tile = minefield[rowIndex][colIndex];
  if (tile.hasMine) return;

  let topTile = getAdjacentTile(minefield, rowIndex - 1, colIndex, numRows, numColumns);
  if (topTile && topTile.hasMine) {
    tile.numNeighborMines += 1;
  }

  let topLeftTile = getAdjacentTile(minefield, rowIndex - 1, colIndex - 1, numRows, numColumns);
  if (topLeftTile && topLeftTile.hasMine) {
    tile.numNeighborMines += 1;
  }

  let topRightTile = getAdjacentTile(minefield, rowIndex - 1, colIndex + 1, numRows, numColumns);
  if (topRightTile && topRightTile.hasMine) {
    tile.numNeighborMines += 1;
  }

  let leftTile = getAdjacentTile(minefield, rowIndex, colIndex - 1, numRows, numColumns);
  if (leftTile && leftTile.hasMine) {
    tile.numNeighborMines += 1;
  }

  let rightTile = getAdjacentTile(minefield, rowIndex, colIndex + 1, numRows, numColumns);
  if (rightTile && rightTile.hasMine) {
    tile.numNeighborMines += 1;
  }

  let bottomTile = getAdjacentTile(minefield, rowIndex + 1, colIndex, numRows, numColumns);
  if (bottomTile && bottomTile.hasMine) {
    tile.numNeighborMines += 1;
  }

  let bottomLeftTile = getAdjacentTile(minefield, rowIndex + 1, colIndex - 1, numRows, numColumns);
  if (bottomLeftTile && bottomLeftTile.hasMine) {
    tile.numNeighborMines += 1;
  }

  let bottomRightTile = getAdjacentTile(minefield, rowIndex + 1, colIndex + 1, numRows, numColumns);
  if (bottomRightTile && bottomRightTile.hasMine) {
    tile.numNeighborMines += 1;
  }
};

const getAdjacentTile = (
  minefield = requiredParam('minefield'),
  rowIndex = requiredParam('rowIndex'),
  colIndex = requiredParam('colIndex'),
  numRows = requiredParam('numRows'),
  numColumns = requiredParam('numColumns')
) => {
  if (rowIndex < 0 || colIndex < 0 || rowIndex >= numRows || colIndex >= numColumns) {
    return null;
  }
  return minefield[rowIndex][colIndex];
};

export const revealMinefieldTiles = minefield => {};

export const recursiveTileReveal = (
  minefield = requiredParam('minefield'),
  rowIndex = requiredParam('rowIndex'),
  colIndex = requiredParam('colIndex')
) => {
  return revealTile(minefield, rowIndex, colIndex);
};

const revealTile = (
  minefield = requiredParam('minefield'),
  rowIndex = requiredParam('rowIndex'),
  colIndex = requiredParam('colIndex')
) => {
  let numRows = minefield.length;
  let numCols = minefield[0].length;
  let tile = getAdjacentTile(minefield, rowIndex, colIndex, numRows, numCols);

  if (tile && !tile.isOpen && !tile.hasMine && !tile.hasFlag) {
    tile.isOpen = true;
    if (tile.numNeighborMines === 0) {
      //top tile
      revealTile(minefield, rowIndex - 1, colIndex);
      //top left tile
      revealTile(minefield, rowIndex - 1, colIndex - 1);
      //top right tile
      revealTile(minefield, rowIndex - 1, colIndex + 1);
      //left tile
      revealTile(minefield, rowIndex, colIndex - 1);
      //right tile
      revealTile(minefield, rowIndex, colIndex + 1);
      //bottom tile
      revealTile(minefield, rowIndex + 1, colIndex);
      //bottom left tile
      revealTile(minefield, rowIndex + 1, colIndex - 1);
      //bottom right tile
      revealTile(minefield, rowIndex + 1, colIndex + 1);
    }
  }
  return minefield;
};

export const requiredParam = paramName => {
  throw new Error(`Function param ${paramName} is required`);
};
