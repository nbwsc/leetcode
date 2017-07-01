/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 js version :the type of input and output is Array instead of  TreeNode

 Total Accepted: 172810
Total Submissions: 336987
Difficulty: Easy
Contributor: LeetCode
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var invertTree = function(root) {
	if (!root || root.left === null && root.right === null)
		return root;
	var newTree = new TreeNode(root.val);
	newTree.left = root.right;
	newTree.right = root.left;
	return newTree;
};

console.log(invertTree([]))