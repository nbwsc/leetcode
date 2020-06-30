/**
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note: 
(1) You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
(2) 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

Example:

Given [3, 1, 5, 8]

Return 167

    nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
	if (!nums.length) return 0;
	if (nums.length === 1) return nums[0];
	var coins = 0;

	function bb(arr) {
		// if (!arr.length) return;
		if (arr.length <= 2) {
			coins += arr[0] * arr[1] + Math.max(...arr);
			// console.log('return ', coins);
			return 'coins';
		} else {
			var innerArr = arr.slice(1, -1);
			var i = getMinElementIndex(innerArr);
			console.log(coins,i,innerArr);
			coins += arr[i] * arr[i + 1] * arr[i + 2];
			arr.splice(i + 1, 1);
			bb(arr)

		}
	}
	bb(nums)
	return coins;

};



function getMinElementIndex(arr) {
	return arr.indexOf(Math.min(...arr));
}

console.log(maxCoins([9,76,64,21,97,60]))//fail in this case!