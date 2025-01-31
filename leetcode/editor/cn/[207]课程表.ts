//你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。 
//
// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表
//示如果要学习课程 ai 则 必须 先学习课程 bi 。 
//
// 
// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。 
// 
//
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。 
//
// 
//
// 示例 1： 
//
// 
//输入：numCourses = 2, prerequisites = [[1,0]]
//输出：true
//解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。 
//
// 示例 2： 
//
// 
//输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
//输出：false
//解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。 
//
// 
//
// 提示： 
//
// 
// 1 <= numCourses <= 2000 
// 0 <= prerequisites.length <= 5000 
// prerequisites[i].length == 2 
// 0 <= ai, bi < numCourses 
// prerequisites[i] 中的所有课程对 互不相同 
// 
//
// Related Topics 深度优先搜索 广度优先搜索 图 拓扑排序 👍 2071 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // 入度数组
    // 接临表
    const isDegree: number[] = new Array(numCourses).fill(0)
    const map: any = {}
    // 确定入度
    for (let i = 0; i < prerequisites.length; i++) {
        isDegree[prerequisites[i][0]] ++ //课程初试入度
        if (map[prerequisites[i][1]]){
            map[prerequisites[i][1]].push(prerequisites[i][0])
        } else {
            map[prerequisites[i][1]] = [prerequisites[i][0]]
        }
    }
    console.log(isDegree)
    console.log(map) // 课程与依赖课程的关系
    const stack = [] //入列
    for (let i = 0; i < isDegree.length; i++) {
        if (isDegree[i] == 0){
            stack.push(i)
        }
    }
    console.log(stack)
    let count = 0
    while (stack.length){
        console.log(stack)
        const select: any = stack.shift()
        console.log('当前选择的课程' + select) // 当前选择的课程
        count ++
        const toEnQueue: any = map[select + '']
        if (toEnQueue && toEnQueue.length){
            for (let i = 0; i < toEnQueue.length; i++) {
                isDegree[toEnQueue[i]] --
                if (isDegree[toEnQueue[i]] == 0){
                    stack.push(toEnQueue[i])
                }
            }
        }
    }

    return count == numCourses
};
//leetcode submit region end(Prohibit modification and deletion)

const n = 6
const arr = [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]
canFinish(n, arr)