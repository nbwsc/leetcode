/**
A peak element is an element that is greater than its neighbors.

Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that num[-1] = num[n] = -∞.

For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.


Note:
Your solution should be in logarithmic complexity.
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement_silly = function(nums) {
	var i = 0
	nums[-1] = nums[nums.length] = -Infinity;
	for (;
		(nums[i] < nums[i - 1]) || (nums[i] < nums[i + 1]) && (i <= nums.length - 1); i++) {}
	return i
};

var findPeakElement = function(nums) {
	nums[-1] = nums[nums.length] = -Infinity;

	function binary(head, tail) {
		var cur = ~~((head + tail) / 2);
		if (nums[cur] > nums[cur - 1] && nums[cur] > nums[cur + 1]) {
			return cur;
		} else if (nums[cur] < nums[cur - 1] && nums[cur] > nums[cur + 1]) {
			return binary(head, cur);
		} else {
			return binary(cur, tail)
		}
	}
	return binary(0, nums.length - 1)
}



console.log(findPeakElement([1, 2, 3, 1]))
console.log(findPeakElement([2, 1]))