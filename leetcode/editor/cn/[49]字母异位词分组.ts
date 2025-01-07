//给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。 
//
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。 
//
// 
//
// 示例 1: 
//
// 
//输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
//输出: [["bat"],["nat","tan"],["ate","eat","tea"]] 
//
// 示例 2: 
//
// 
//输入: strs = [""]
//输出: [[""]]
// 
//
// 示例 3: 
//
// 
//输入: strs = ["a"]
//输出: [["a"]] 
//
// 
//
// 提示： 
//
// 
// 1 <= strs.length <= 10⁴ 
// 0 <= strs[i].length <= 100 
// strs[i] 仅包含小写字母 
// 
//
// Related Topics 数组 哈希表 字符串 排序 👍 2037 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function groupAnagrams(strs: string[]): string[][] {
    const map = []
    for (let i = 0; i < strs.length; i++) {
        const element = [...strs[i]].sort().join('')
        if (map.indexOf(element) < 0) {
            map.push(element)
        }
    }
    const keyObj: any = {}
    for (let i = 0; i < map.length; i++) {
        keyObj[map[i]] = []
    }
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i]
        const element = [...strs[i]].sort().join('')
        keyObj[element].push(str)
    }
    const keys = Object.keys(keyObj)
    const back = []
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        back.push(keyObj[key])
    }
    return back
}
//leetcode submit region end(Prohibit modification and deletion)