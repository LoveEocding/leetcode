var isValid = function (s) {
    const stack = [];
    let k;
    for (let k of s) {
        if (k === '(' || k === '[' || k === '{') {
            stack.push(k);
        }
        if (k === ')') {
            if (stack.pop() !== '(') {
                return false;
            }
        }
        if (k === ']') {
            if (stack.pop() !== '[') {
                return false;
            }
        }
        if (k === '}') {
            if (stack.pop() !== '}') {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};