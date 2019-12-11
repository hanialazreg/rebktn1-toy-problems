/*
Given two binary trees and imagine that when you put one of them to cover the other,
some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes
overlap, then sum node values up as the new value of the merged node. Otherwise,
the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

 //  first
var mergeTrees = function(t1, t2) {
// create a new tree
// start from the root node do the summation and add it to the new tree then 
// every time call the left and right child if two exist do the summation 
// else add the not null node to the new tree.
var newTree = new TreeNode()
	if(t1.val && t2.val){
		newTree.val = t1.val + t2.val;
	}
	if(t1.left && t2.left){
		newTree.left = mergeTrees(t1.left, t2.left);
	}
	if(t1.right && t2.right){
		newTree.right = mergeTrees(t1.right, t2.right);
	}
	if(!t1.left){
		newTree.left = t2.right;
	}
	if (!t2.right) {
		newTree.right = t2.right
	}

return newTree;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// second 
var mergeTrees = function(t1, t2) {
	var newTree = new TreeNode(t1.val + t2.val)
	if(t1.left && t2.left){
	this.left = mergeTrees(t1.left,t2.left);
	this.right = mergeTrees(t1.right,t2.right);
	}
	else
	{ 

	}
	return newTree ;
}
