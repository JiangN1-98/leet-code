//给定一个含有 n 个正整数的数组和一个正整数 target 。 
//
// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其
//长度。如果不存在符合条件的子数组，返回 0 。 
//
// 
//
// 示例 1： 
//
// 
//输入：target = 7, nums = [2,3,1,2,4,3]
//输出：2
//解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 
//
// 示例 2： 
//
// 
//输入：target = 4, nums = [1,4,4]
//输出：1
// 
//
// 示例 3： 
//
// 
//输入：target = 11, nums = [1,1,1,1,1,1,1,1]
//输出：0
// 
//
// 
//
// 提示： 
//
// 
// 1 <= target <= 10⁹ 
// 1 <= nums.length <= 10⁵ 
// 1 <= nums[i] <= 10⁴ 
// 
//
// 
//
// 进阶： 
//
// 
// 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。 
// 
//
// Related Topics 数组 二分查找 前缀和 滑动窗口 👍 2274 👎 0



//leetcode submit region begin(Prohibit modification and deletion)
function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0
    let right = 0
    const n = nums.length
    let sum = 0
    let ans = Number.MAX_SAFE_INTEGER
    while (left < n && right < n) {
        sum += nums[right]
        while (sum >= target) {
            ans = Math.min(ans, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return ans == Number.MAX_SAFE_INTEGER ? 0 : ans
}
//leetcode submit region end(Prohibit modification and deletion)
