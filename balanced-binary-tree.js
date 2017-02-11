/**
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * Definition for a binary tree node.

 * function TreeNode(val) {

 *     this.val = val;

 *     this.left = this.right = null;

 * }

 */

/**

 * @param {TreeNode} root

 * @return {boolean}

 */

var isBalanced = function(root) {

    if(!root) return true;

    return Math.abs(depth(root.left)-depth(root.right))<2 && isBalanced(root.left) && isBalanced(root.right)

};



var depth = function(node){

    if(!node) return 0;

    return Math.max (depth(node.left), depth (node.right)) + 1;

}