/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const len1 = s.length;
    const len2 = t.length;
    const map = {};
    if(len1 === len2) {
        for(let i = 0; i < len1; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1;
        }
        for(let j = 0; j < len2; j++) {
            if(!map[t[j]]) return false;
            else map[t[j]] -= 1;
        }
        return Object.values(map).filter(count => count !== 0).length === 0;
    }
    return false;
};
