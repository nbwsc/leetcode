/**
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
	var l1 = num1.length,
		l2 = num2.length,
	    Maxlength = Math.max(l1, l2);

	var res = new Array(Maxlength);
	var jwflag = 0;
	console.log(l1,l2)
	for (var i = 1; i <= Maxlength; i++) {

		var t = (+num1[l1 - i]||0) + (+num2[l2 - i]||0)+jwflag;
		console.log(+num1[l1 - i]||0,+num2[l2 - i]||0,t)
		jwflag = 0;
		if (t > 9) {
			res[Maxlength - i] = t%10;
			jwflag = 1;
		}else{
			res[Maxlength - i ] = t;
		}
	}
	return jwflag?'1'+res.join(''):res.join('');
};

console.log(addStrings('9871364','234326'))