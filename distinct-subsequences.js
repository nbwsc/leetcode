/*
Given a string S and a string T, count the number of distinct subsequences of T in S.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Here is an example:
S = "rabbbit", T = "rabbit"

Return 3.
first we check with a:

           *  *
      S = [acdabefbc]
mem[1] = [0111222222]
then we check with ab:

               *  * ]
      S = [acdabefbc]
mem[1] = [0111222222]
mem[2] = [0000022244]
*/

/**
 
 * @param {string} s
 
 * @param {string} t
 
 * @return {number}
 
 */

var numDistinct = function(s, t) {
	if (s.length === 0 || t.length === 0 || s.length < t.length) return 0;
	var dr = [];
	for (var i = 0; i < s.length; i++) {
		if()
	}

};