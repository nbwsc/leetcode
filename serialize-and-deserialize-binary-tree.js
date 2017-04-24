/**
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 *
 * For example, you may serialize the following tree
 *
 *      1
 *	   / \
 *    2   3
 *       / \
 *      4   5
 *  as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 *  Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
 *
 *  * Definition for a binary tree node.
 *
 *   * function TreeNode(val) {
 *
 *    *     this.val = val;
 *
 *     *     this.left = this.right = null;
 *
 *      * }
 *
 *       */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;

}

/**
 *
 *  * Encodes a tree to a single string.
 *
 *   *
 *
 *    * @param {TreeNode} root
 *
 *     * @return {string}
 *
 *      */

var serialize = function(root) {
	var res = [];

	function g(node) {
		// console.log('val',node.val)
		res.push(node.val);
		if ('object' === typeof this.left) {
			console.log(this.left)
			g(node.left)
		} else {
			res.push(null)
		}
		if ('object' === typeof this.right) {
			// console.log(this.right)
			g(node.right)
		} else {
			res.push(null)
		}
	}
	g(root);
	return res;

};



/**
 *
 *  * Decodes your encoded data to tree.
 *
 *   *
 *
 *    * @param {string} data
 *
 *     * @return {TreeNode}
 *
 *      */

var deserialize = function(data) {



};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(serialize(root), root)


	/**
	 *
	 *  * Your functions will be called as such:
	 *
	 *   * deserialize(serialize(root));
	 *
	 *    */