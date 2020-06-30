/**
Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
A solution set is: 
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]//it was sorted
]
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	var a = candidates.filter((e) => {
		return e <= target;
	}).sort();
	var res = []
	var path = [];

	function loop(cand, cur, target, path) {
		console.log('inloop',cand, cur, target, path)
		if (target === 0) {
			console.log('path',path)
			res.push(path.slice());
			return;
		}
		if (target < 0) {
			return;
		}
		for (var i = cur; i < cand.length; i++) {
			if (i > cur && cand[i] == cand[i - 1]) continue;
			path.push(cand[i]);
			loop(cand,i+1,target-cand[i],path);
			path.pop()
		}
	}
	loop(a, 0, target, path)
	return res;
};


console.log(combinationSum2([1],1))
// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5],8))