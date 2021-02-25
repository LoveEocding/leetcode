var solveSudoku = function (board) {
    const dataX = [];
    const dataY = [];
    const dataZ = [];
    let z;
    for (let i = 0, len = board.length; i < len; i++) {
        z = Math.floor(i / 3) * 3;
        dataX[i] = new Set([]);
        for (let j = 0; j < board[i].length; j++) {
            let val = board[i][j];
            let k = z + Math.floor(j / 3);
            if (!dataZ[k]) {
                dataZ[k] = new Set([]);
            }
            if (!dataY[j]) {
                dataY[j] = new Set([]);
            }
            if (/[1-9]/g.test(val)) {
                dataX[i].add(val);
                dataY[j].add(val);
                dataZ[k].add(val);
            }

        }
    }

    function fill(i, j) {
        if (j === 9) {
            if (i === 8) return true;
            i++;
            j = 0;
        }
        if (board[i][j] != '.') {
            return fill(i, j + 1);
        }
        let k = Math.floor(j / 3) + Math.floor(i / 3) * 3;
        for (let z = 1; z <= 9; z++) {
            let val = String(z);
            if (dataX[i].has(val) || dataY[j].has(val) || dataZ[k].has(val)) {
                continue;
            }
            board[i][j] = val;
            dataX[i].add(val);
            dataY[j].add(val);
            dataZ[k].add(val);
            //这条路走不通回溯
            if (!fill(i, j + 1)) {
                board[i][j] = '.';
                dataX[i].delete(val);
                dataY[j].delete(val);
                dataZ[k].delete(val);
            } else {
                return true;
            }

        }
        return false;
    }
    fill(0, 0);
    return board;
};

console.log(solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))