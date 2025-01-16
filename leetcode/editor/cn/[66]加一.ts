//给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。 
//
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。 
//
// 你可以假设除了整数 0 之外，这个整数不会以零开头。 
//
// 
//
// 示例 1： 
//
// 
//输入：digits = [1,2,3]
//输出：[1,2,4]
//解释：输入数组表示数字 123。
// 
//
// 示例 2： 
//
// 
//输入：digits = [4,3,2,1]
//输出：[4,3,2,2]
//解释：输入数组表示数字 4321。
// 
//
// 示例 3： 
//
// 
//输入：digits = [9]
//输出：[1,0]
//解释：输入数组表示数字 9。
//加 1 得到了 9 + 1 = 10。
//因此，结果应该是 [1,0]。
// 
//
// 
//
// 提示： 
//
// 
// 1 <= digits.length <= 100 
// 0 <= digits[i] <= 9 
// 
//
// Related Topics 数组 数学 👍 1456 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function plusOne(digits: number[]): number[] {
    // let i = digits.length - 1
    // let carry = true
    // let arr = new Array(digits.length).fill(0)
    // while (i >= 0 ){
    //     if (carry){
    //         if (digits[i] == 9){
    //             arr[i] = 0
    //             carry = true
    //         } else {
    //             arr[i] = digits[i] + 1
    //             carry = false
    //         }
    //     } else {
    //         arr[i] = digits[i]
    //     }
    //     i --
    // }
    //
    // return carry ? [1].concat(arr) : arr
    let i = digits.length - 1;
    // 只考虑全都是9的情况
    while (i >= 0 && digits[i] === 9) {
        digits[i] = 0;
        i--;
    }
    // +1 进位
    if (i >= 0) {
        digits[i]++;
    } else {
        // 99999999999999 全都是9
        digits.unshift(1);
    }
    return digits;
};
//leetcode submit region end(Prohibit modification and deletion)
