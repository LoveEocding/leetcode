//[1,2,3]
var permuteUnique = function (nums) {
    const len = nums.length;
    const res = [];
    const circle = function (aimArr, leftArr) {

        if (aimArr.length == len) {
            res.push(aimArr);
            return;
        }
        const useTop = [];
        for (let i = 0; i < leftArr.length; i++) {
            if (useTop.includes(leftArr[i])) {
                continue;
            }
            //过滤重复选项
            let lookdata = [...aimArr];
            aimArr.push(leftArr[i]);
            useTop.push(leftArr[i]);
            let c = notInclude(leftArr, i);
            circle(aimArr, c);
            aimArr = [...lookdata];
        }
    }
    circle([], nums);
    return res;
};
var notInclude = function (arr, i) {
    let c = [...arr];
    c.splice(i, 1);
    return c;
}
console.log(permuteUnique([1, 2, 3]));