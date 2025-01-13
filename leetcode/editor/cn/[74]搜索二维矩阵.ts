//给你一个满足下述两条属性的 m x n 整数矩阵： 
//
// 
// 每行中的整数从左到右按非严格递增顺序排列。 
// 每行的第一个整数大于前一行的最后一个整数。 
// 
//
// 给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。 
//
// 
//
// 示例 1： 
// 
// 
//输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
//输出：true
// 
//
// 示例 2： 
// 
// 
//输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
//输出：false
// 
//
// 
//
// 提示： 
//
// 
// m == matrix.length 
// n == matrix[i].length 
// 1 <= m, n <= 100 
// -10⁴ <= matrix[i][j], target <= 10⁴ 
// 
//
// Related Topics 数组 二分查找 矩阵 👍 1002 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function searchMatrix(matrix: number[][], target: number): boolean {
    // let sort_arr: number[] = []
    // for (let i = 0; i < matrix.length; i++) {
    //     sort_arr = sort_arr.concat(matrix[i])
    // }
    const row = matrix.length
    const col = matrix[0].length
    let left = 0, right = row * col - 1
    while (left <= right){
        const mid = Math.floor(left + (right - left) / 2)
        const m = Math.floor(mid / col)
        const n = mid - m * col
        const cur = matrix[m][n]
        if (cur < target){
            left = mid + 1
        } else if (cur > target){
            right = mid - 1
        } else {
            return true
        }
    }
    return false
}
//leetcode submit region end(Prohibit modification and deletion)