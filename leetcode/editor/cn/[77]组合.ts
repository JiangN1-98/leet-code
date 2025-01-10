//给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。 
//
// 你可以按 任何顺序 返回答案。 
//
// 
//
// 示例 1： 
//
// 
//输入：n = 4, k = 2
//输出：
//[
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
//] 
//
// 示例 2： 
//
// 
//输入：n = 1, k = 1
//输出：[[1]] 
//
// 
//
// 提示： 
//
// 
// 1 <= n <= 20 
// 1 <= k <= n 
// 
//
// Related Topics 回溯 👍 1714 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function combine(n: number, k: number): number[][] {
    if (k == 0) {
        return []
    }
    const back: any[] = []

    const dfs = (start: number, preArr: number[]) => {
        for (let i = start; i <= n; i++) {
            const cur = preArr.concat(i)
            if (cur.length >= k) {
                back.push(cur)
            } else {
                dfs(i + 1, cur)
            }
        }
    }
    dfs(1, [])
    return back
};
//leetcode submit region end(Prohibit modification and deletion)