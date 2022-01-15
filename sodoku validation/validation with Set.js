const board = [
  ["5”,”3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function isValidSudoku(rows) {
  const rowSet = new Set();
  const columnSet = new Set();
  const boxSet = new Set();

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    for (let j = 0; j < row.length; j++) {
      const rowSpace = row[j];
      const columnSpace = rows[j][i];

      const boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const boxColumn = ((i * 3) % 9) + (j % 3);
      const boxSpace = rows[boxRow][boxColumn];

      if (rowSpace !== ".") {
        if (rowSet.has(rowSpace)) return false;
        rowSet.add(rowSpace);
      }

      if (columnSpace !== ".") {
        if (columnSet.has(columnSpace)) return false;
        columnSet.add(columnSpace);
      }

      if (boxSpace !== ".") {
        if (boxSet.has(boxSpace)) return false;
        boxSet.add(boxSpace);
      }
    }
    rowSet.clear();
    columnSet.clear();
    boxSet.clear();
  }
  return true;
}

console.log(isValidSudoku(board));
