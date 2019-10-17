var postorderTraversal = function(root) {
    if(!root) {
        return [];
    }
    let res=[];
    let stack = [];
    stack.unshift(root);
    while(stack.length) {
        let currNode = stack.splice(0,1)[0];
        res.unshift(currNode.val);
        if(currNode.left) {
          stack.unshift(currNode.left);
        }
        if(currNode.right) {
          stack.unshift(currNode.right);
        }
    }
    return res;
};
