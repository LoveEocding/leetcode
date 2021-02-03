/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const tempArr = []
    var crcle = function (left, right, s) {
        if (s.length === 2 * n) {
            tempArr.push(s);
            return;
        }
        if (left > 0) {
            crcle(left - 1, right, s + '(');
        }
        if (right > left) {
            crcle(left, right - 1, s + ')');
        }
    }
    crcle(n, n, '');
    return tempArr;
};

const list2 = generateParenthesis(1);
console.log(list2);