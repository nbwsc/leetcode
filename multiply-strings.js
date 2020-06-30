/**
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	var res = new Array(num1.length+num2.length).fill(0);
	for (var i = num1.length - 1; i >= 0; i--) {
		for (var j = num2.length - 1; j >= 0; j--) {
			var mul = num1[i] * num2[j];
			var p1 = i + j,
				p2 = i + j + 1,
				sum = mul + res[p2]||0;
			// console.log(mul,p2,res[p2],sum,sum/10,sum%10)
			res[p1] += Math.floor(sum / 10);
			res[p2] = sum % 10;
		}
	}
	// console.log(res);
	return res.join('').replace(/\b(0+)/gi,"")||'0';//for '0'
};


console.log(multiply('0', '0'))
// console.log(multiply('123', '456'))