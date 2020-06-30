/**
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


Example 1:

Input: k = 3, n = 7

Output:

[[1,2,4]]

Example 2:

Input: k = 3, n = 9

Output:

[[1,2,6], [1,3,5], [2,3,4]]
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	if (n < k * (k + 1) / 2 || n > 9 * k - k * (k - 1) / 2 || k > 9) {
		return []
	}
	var res = [];
	var d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return combinations(d, k, n).filter(function(e){
		var sum = 0;
		e.forEach(function(ele){
			sum += ele
		})
		return sum === n
	})
};

function combinations(set, k, n) {
	var i, j, combs, head, tailcombs;

	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}

	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}

	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}


	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = combinations(set.slice(i + 1), k - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			// console.log(head.concat(tailcombs[j]))
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

console.log(combinationSum3(3,9))