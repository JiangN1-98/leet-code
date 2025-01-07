//给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。 
//
// 
//
// 示例 1： 
// 
// 
//输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
//输出：[1,2,3,6,9,8,7,4,5]
// 
//
// 示例 2： 
// 
// 
//输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//输出：[1,2,3,4,8,12,11,10,9,5,6,7]
// 
//
// 
//
// 提示： 
//
// 
// m == matrix.length 
// n == matrix[i].length 
// 1 <= m, n <= 10 
// -100 <= matrix[i][j] <= 100 
// 
//
// Related Topics 数组 矩阵 模拟 👍 1786 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const back: number[] = []
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    while (top <= bottom && left <= right) {
        for (let k = left; k <= right; k++) {
            back.push(matrix[top][k])
        }
        for (let k = top + 1; k <= bottom; k++) {
            back.push(matrix[k][right])
        }
        if (left < right && top < bottom) {
            for (let k = right - 1; k > left; k--) {
                back.push(matrix[bottom][k]);
            }
            for (let k = bottom; k > top; k--) {
                back.push(matrix[k][left]);
            }
        }
        right--
        bottom--
        left++
        top++
    }
    return back
}
//leetcode submit region end(Prohibit modification and deletion)