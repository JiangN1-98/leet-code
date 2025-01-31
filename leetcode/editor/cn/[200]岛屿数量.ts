//给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。 
//
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。 
//
// 此外，你可以假设该网格的四条边均被水包围。 
//
// 
//
// 示例 1： 
//
// 
//输入：grid = [
//  ["1","1","1","1","0"],
//  ["1","1","0","1","0"],
//  ["1","1","0","0","0"],
//  ["0","0","0","0","0"]
//]
//输出：1
// 
//
// 示例 2： 
//
// 
//输入：grid = [
//  ["1","1","0","0","0"],
//  ["1","1","0","0","0"],
//  ["0","0","1","0","0"],
//  ["0","0","0","1","1"]
//]
//输出：3
// 
//
// 
//
// 提示： 
//
// 
// m == grid.length 
// n == grid[i].length 
// 1 <= m, n <= 300 
// grid[i][j] 的值为 '0' 或 '1' 
// 
//
// Related Topics 深度优先搜索 广度优先搜索 并查集 数组 矩阵 👍 2669 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function numIslands(grid: string[][]): number {
    const m = grid.length
    const n = grid[0].length

    const dfs = (x: number, y: number) => {
        if (grid[x][y] == '1') {
            grid[x][y] = '0'
            if (x - 1 >= 0) dfs(x - 1, y)
            if (x + 1 < m) dfs(x + 1, y)
            if (y - 1 >= 0) dfs(x, y - 1)
            if (y + 1 < n) dfs(x, y + 1)
        } else {
            return
        }
    }
    let num = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const item = grid[i][j]
            if (item == '1'){
                num ++
                dfs(i, j)
            }
        }
    }
    return num
};
//leetcode submit region end(Prohibit modification and deletion)
