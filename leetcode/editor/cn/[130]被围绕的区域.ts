//给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' 组成，捕获 所有 被围绕的区域： 
//
// 
// 连接：一个单元格与水平或垂直方向上相邻的单元格连接。 
// 区域：连接所有 'O' 的单元格来形成一个区域。 
// 围绕：如果您可以用 'X' 单元格 连接这个区域，并且区域中没有任何单元格位于 board 边缘，则该区域被 'X' 单元格围绕。 
// 
//
// 通过 原地 将输入矩阵中的所有 'O' 替换为 'X' 来 捕获被围绕的区域。你不需要返回任何值。 
//
// 
// 
// 
// 
// 
//
// 示例 1： 
//
// 
// 输入：board =
//[
// ["X","X","X","X"],
// ["X","O","O","X"],
// ["X","X","O","X"],
// ["X","O","X","X"]
// ]
// 
//
// 输出：[
// ["X","X","X","X"],
// ["X","X","X","X"],
// ["X","X","X","X"],
// ["X","O","X","X"]
// ]
//
// 解释： 
// 
// 在上图中，底部的区域没有被捕获，因为它在 board 的边缘并且不能被围绕。 
//
// 示例 2： 
//
// 
// 输入：board = [["X"]] 
// 
//
// 输出：[["X"]] 
//
// 
//
// 提示： 
//
// 
// m == board.length 
// n == board[i].length 
// 1 <= m, n <= 200 
// board[i][j] 为 'X' 或 'O' 
// 
//
// Related Topics 深度优先搜索 广度优先搜索 并查集 数组 矩阵 👍 1175 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const row = board.length;
    if (row == 0){
        return
    }
    const col = board[0].length;

    const dfs = (x: number, y: number) => {
        if (x < 0 || y < 0 || x >= row || y >= col || board[x][y] != 'O') {
            return
        }
        board[x][y] = 'A'
        dfs(x - 1, y)
        dfs(x + 1, y)
        dfs(x, y - 1)
        dfs(x, y + 1)
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0 || j == 0 || i == row - 1 || j == col - 1){
                dfs(i, j)
            }
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] == 'O'){
                board[i][j] = 'X'
            } else if (board[i][j] == 'A'){
                board[i][j] = 'O'
            }
        }
    }
    console.log(board)
    return
};
//leetcode submit region end(Prohibit modification and deletion)
