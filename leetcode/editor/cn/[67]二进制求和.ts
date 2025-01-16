//给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。 
//
// 
//
// 示例 1： 
//
// 
//输入:a = "11", b = "1"
//输出："100" 
//
// 示例 2： 
//
// 
//输入：a = "1010", b = "1011"
//输出："10101" 
//
// 
//
// 提示： 
//
// 
// 1 <= a.length, b.length <= 10⁴ 
// a 和 b 仅由字符 '0' 或 '1' 组成 
// 字符串如果不是 "0" ，就不含前导零 
// 
//
// Related Topics 位运算 数学 字符串 模拟 👍 1267 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function addBinary(a: string, b: string): string {
    // let aLength = a.length;
    // let bLength = b.length;
    // let ans = ''
    // let maxLength = Math.max(aLength, bLength)
    // if (aLength < bLength){
    //     a = new Array(maxLength - aLength).fill(0).join('') + a
    // } else {
    //     b = new Array(maxLength - bLength).fill(0).join('') + b
    // }
    // let needP = false
    // for (let i = maxLength - 1; i >= 0; i--) {
    //     const parseA = parseInt(a[i])
    //     const parseB = parseInt(b[i])
    //     const sum = parseA + parseB
    //     if (needP){
    //         if (sum == 0){
    //             ans = '1' + ans
    //             needP = false
    //         } else if (sum == 1){
    //             ans = '0' + ans
    //             needP = true
    //         } else {
    //             ans = '1' + ans
    //             needP = true
    //         }
    //     } else {
    //         if (sum == 0){
    //             ans = '0' + ans
    //             needP = false
    //         } else if (sum == 1){
    //             ans = '1' + ans
    //             needP = false
    //         } else {
    //             ans = '0' + ans
    //             needP = true
    //         }
    //     }
    // }
    // if (needP){
    //     ans = '1' + ans
    // }
    let ans = ''
    let carry = 0
    let aIndex = a.length - 1, bIndex = b.length - 1
    while (aIndex >= 0 || bIndex >= 0 || carry == 1){
        const parseA: 0 | 1 = a[aIndex] == '1' ? 1 : 0
        const parseB: 0 | 1 = b[bIndex] == '1' ? 1 : 0
        const temp = parseA + parseB + carry
        ans = temp % 2 + ans + ''
        carry = temp > 1 ? 1 : 0
        aIndex--
        bIndex--
    }
    return ans
};
//leetcode submit region end(Prohibit modification and deletion)