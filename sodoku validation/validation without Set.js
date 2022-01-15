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

let rows = [];
let columns = [];
let boxes = [];

for (let i = 0; i < 9; i++) {
  rows.push([]);
  columns.push([]);
  boxes.push([]);
} // This will create 9 sub arrays, which will look like such:
// rows = [[], [], [], [], [], [], [], [], []];
// columns = [[], [], [], [], [], [], [], [], []];
// boxes = [[], [], [], [], [], [], [], [], []];

function isValidSudoku(board) {
  for (let i = 0; i < board.length; i++) {
    // Row
    for (let j = 0; j < board.length; j++) {
      //Column

      let space = board[i][j]; // store board space in variable

      if (space !== ".") {
        //if cell is not empty
        if (rows[i].includes(space)) {
          return false;
        } else {
          rows[i].push(space); // add value to row array
        }

        if (columns[j].includes(space)) {
          return false;
        } else {
          columns[j].push(space); // add value to column array
        }

        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        //console.log(boxIndex);
        if (boxes[boxIndex].includes(space)) {
          return false;
        } else {
          boxes[boxIndex].push(space); // add value to box array
        }
      }
    }
  }
  return true;
}

console.log(isValidSudoku(board));
