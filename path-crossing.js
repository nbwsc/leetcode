/**
 * 
 * 
给你一个字符串 path，其中 path[i] 的值可以是 'N'、'S'、'E' 或者 'W'，分别表示向北、向南、向东、向西移动一个单位。

机器人从二维平面上的原点 (0, 0) 处开始出发，按 path 所指示的路径行走。

如果路径在任何位置上出现相交的情况，也就是走到之前已经走过的位置，请返回 True ；否则，返回 False 。

输入：path = "NES"
输出：false 
解释：该路径没有在任何位置相交。
 */

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    const pathMap = {};
    let x = 0;
    let y = 0;
    pathMap["0,0"] = true;
    for (const s of path) {
        switch (s) {
            case "N":
                y += 1;
                break;
            case "S":
                y -= 1;
                break;
            case "E":
                x += 1;
                break;
            case "W":
                x -= 1;
                break;
            default:
                break;
        }
        pStr = `${x},${y}`;
        if (pathMap[pStr]) {
            return true;
        }
        pathMap[pStr] = true;
    }
    return false;
};

console.log(isPathCrossing("NNSWWEWSSESSWENNW"));
