/**

 * @param {number[]} nums

 * @param {number} target

 * @return {number[]}

 */

var twoSum = function(nums, target) {

    var tmp = {}

    for(var i = 0 ; i < nums.length; i ++){

        if(tmp.hasOwnProperty([nums[i]])){

            return [tmp[nums[i]],i]

        }

        tmp[target - nums[i]] = i;

    }

};
