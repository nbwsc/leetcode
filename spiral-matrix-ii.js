/**
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]


 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	var matrix = [],
		num = 1,
		dirs = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0]
		],
		trunIndex = 0,
		row = 0,
		col = 0;

	for (var i = 0; i < n; i++) {
		matrix[i] = new Array(n).fill(0);
	}
	i = 1;
	for (; i <= n * n; i++) {
		if (!matrix[row+dirs[trunIndex % 4][0]] || !(matrix[row+dirs[trunIndex % 4][0]][col+dirs[trunIndex % 4][1]] === 0) ){
			trunIndex++;
		}
		matrix[row][col] = i;
		row += dirs[trunIndex % 4][0];
		col += dirs[trunIndex % 4][1];
	}
	return matrix;
};

console.log(generateMatrix(6))