class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

var hasPathSum = function (root, targetSum) {
  let result = 0;
  function traversal(node) {
    if (!node) {
      return false;
    }
    result += node.val;
    if (!node.left && !node.right) {
      if (result === targetSum) {
        return true;
      }
      result -= node.val;
    }
    return traversal(node.left) || traversal(node.right);
  }
  return traversal(root);
};


// Пример использования:
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

console.log(hasPathSum(root, 22));


