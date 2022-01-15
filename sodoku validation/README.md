# Valid Sodoku

Determine if a 9 X 9 Sodoku board is valid. Only the filled celss need to be validated **according to the following rules:**

1. Each row must contain the digits 1 - 9 without repetition.
2. Each column must contain the digits 1 - 9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid contain the digits 1 - 9 without repetition.

### Note:

- A Sodoku board (partially filled) could be valid but is not necessarily solvable.
- ONly the filled cells need to be validated according to the mentioned rules.

## Instructions:

1. Check each row for duplicates.
2. Check each column for duplicates.
3. Check each 3x3 sub grid for duplicates.
4. Return false if any duplicates are found, and true if no duplicates are found.

---

JS Set()

- The Set object lets you store unique values of any type
- [Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
