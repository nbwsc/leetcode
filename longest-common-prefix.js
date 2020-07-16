/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";
    if (!strs[0]) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }
    for (let i = 0; ; i++) {
        const currentPrefix = strs[0][i];
        let isContinue = true;
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j][i] || strs[j][i] !== currentPrefix) {
                isContinue = false;
                break;
            }
        }
        if (isContinue) {
            prefix += currentPrefix;
        } else {
            return prefix;
        }
    }
};

console.log(longestCommonPrefix(["a"]));
