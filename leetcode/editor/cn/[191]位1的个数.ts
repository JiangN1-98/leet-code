//给定一个正整数 n，编写一个函数，获取一个正整数的二进制形式并返回其二进制表达式中 设置位 的个数（也被称为汉明重量）。 
//
// 
//
// 示例 1： 
//
// 
//输入：n = 11
//输出：3
//解释：输入的二进制串 1011 中，共有 3 个设置位。
// 
//
// 示例 2： 
//
// 
//输入：n = 128
//输出：1
//解释：输入的二进制串 10000000 中，共有 1 个设置位。
// 
//
// 示例 3： 
//
// 
//输入：n = 2147483645
//输出：30
//解释：输入的二进制串 1111111111111111111111111111101 中，共有 30 个设置位。 
//
// 
//
// 提示： 
//
// 
// 1 <= n <= 2³¹ - 1 
// 
//
// 
// 
//
// 
//
// 进阶： 
//
// 
// 如果多次调用这个函数，你将如何优化你的算法？ 
// 
//
// Related Topics 位运算 分治 👍 664 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function hammingWeight(n: number): number {
    const str = n.toString(2)
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '1'){
            sum++
        }
    }

    return sum
};
//leetcode submit region end(Prohibit modification and deletion)
