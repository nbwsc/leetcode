/**
There are 1000 buckets, one and only one of them contains poison, the rest are filled with water. They all look the same. If a pig drinks that poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket contains the poison within one hour.

Answer this question, and write an algorithm for the follow-up general case.

Follow-up:

If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the "poison" bucket within p minutes? There is exact one bucket with poison.

Subscribe to see which companies asked this question.
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}

 Conclusion: If we have x pigs, we could use them to represent (encode) 2^x buckets.
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
	var rounds = Math.floor(minutesToTest / minutesToDie);
	if (rounds <= 1) {
		return buckets - 1;
	}else{
		return Math.ceil(Math.log(buckets ,rounds))
	}
};

console.log(poorPigs(1000,15,60))