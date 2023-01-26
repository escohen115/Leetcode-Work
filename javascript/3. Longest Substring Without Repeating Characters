/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length===0) return 0
    if (s.length===1) return 1
    let max = 0
    for (let i=0;i<s.length;i++){
        let set = new Set ()
        for (let j=i;j<s.length;j++){
            if (set.has(s[j])){
                max = Math.max(set.size, max)
                break
            }
            else{
                set.add(s[j])
                max = Math.max(set.size, max)
            }
        }
    }
    return max
};