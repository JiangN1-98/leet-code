//给定两个字符串 s 和 t ，判断它们是否是同构的。 
//
// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。 
//
// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。 
//
// 
//
// 示例 1: 
//
// 
//输入：s = "egg", t = "add"
//输出：true
// 
//
// 示例 2： 
//
// 
//输入：s = "foo", t = "bar"
//输出：false 
//
// 示例 3： 
//
// 
//输入：s = "paper", t = "title"
//输出：true 
//
// 
//
// 提示： 
//
// 
// 
//
// 
// 1 <= s.length <= 5 * 10⁴ 
// t.length == s.length 
// s 和 t 由任意有效的 ASCII 字符组成 
// 
//
// Related Topics 哈希表 字符串 👍 744 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function isIsomorphic(s: string, t: string): boolean {

    // const sMap: Map<string, string> = new Map();
    // const shapeArr: string[] = []
    // for (let i = 0; i < s.length; i++) {
    //     const index = i + ''
    //     const char = s.charAt(i);
    //     const mapItem = sMap.get(char)
    //     if (!mapItem) {
    //         sMap.set(char, index)
    //     }
    //     shapeArr.push(sMap.get(char)!)
    // }
    // const tMap: Map<string, string> = new Map();
    // for (let i = 0; i < t.length; i++) {
    //     const char = t.charAt(i);
    //     const index = i + ''
    //     const mapItem = tMap.get(char)
    //     if (!mapItem) {
    //         tMap.set(char, index)
    //     }
    //     if (tMap.get(char) != shapeArr[i]) {
    //         return false
    //     }
    // }
    // return true
    const s2t: any = {}
    const t2s: any = {}
    for (let i = 0; i < t.length; i++) {
        const x = s[i]
        const y = t[i]
        if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
            return false
        }
        s2t[x] = y
        t2s[y] = x
    }
    return true
}
//leetcode submit region end(Prohibit modification and deletion)