var isValidSudoku = function (board) {
    const dataX = [];
    const dataY = [];
    const dataZ = [];
    let z;
    for (let i = 0, len = board.length; i < len; i++) {
        z = Math.floor(i / 3) * 3;
        dataX[i] = [];
        for (let j = 0; j < board[i].length; j++) {
            let val = board[i][j];
            let k = z + Math.floor(j / 3);
            if (!dataZ[k]) {
                dataZ[k] = [];
            }
            if (!dataY[j]) {
                dataY[j] = [];
            }
            if (dataX[i].includes(val) || dataY[j].includes(val) || dataZ[k].includes(val)) {
                return false;
            }
            if (/[1-9]/g.test(val)) {
                dataX[i].push(val);
                dataY[j].push(val);
                dataZ[k].push(val);
            }

        }
    }
    return dataY;
    return true;
};

console.log(isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]))