/**

Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

You may assume that the given expression is always valid.

Some examples:
"1 + 1" = 2
" 2-1 + 2 " = 3
"(1+(4+5+2)-3)+(6+8)" = 23
Note: Do not use the eval built-in library function.


 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
	var len = s.length, sign = 1, result = 0;
	var stack = [];//new Stack < Integer > ();
	for (var i = 0; i < len; i++) {
		if (s[i].charCodeAt() >= '0'.charCodeAt()) {
			var sum = +s[i];
			console.log(s[i+1])
			while (i + 1 < len && s[i+1].charCodeAt() >= '0'.charCodeAt()) {
				sum = sum * 10 + (+s[i + 1])
				i++;
			}
			result += sum * sign;
		} else if (s.charAt(i) == '+')
			sign = 1;
		else if (s.charAt(i) == '-')
			sign = -1;
		else if (s.charAt(i) == '(') {
			stack.push(result);
			stack.push(sign);
			result = 0;
			sign = 1;
		} else if (s.charAt(i) == ')') {
			result = result * stack.pop() + stack.pop();
		}

	}
	return result;
};

console.log(calculate('1 + 2 +4-3+4-(3+4+55)-4'))