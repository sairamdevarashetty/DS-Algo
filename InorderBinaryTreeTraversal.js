function repetitive(root,result){
    while(root && root.left) {
      result.unshift(root.left);
      root = root.left;
    };
    return result;
}

var inorderTraversal = function(root) {
   if(!(root && root.val)){
       return [];
   }
   let result = [];
   let res = [];
    result.unshift(root);
    result = repetitive(root,result);    
    
    while(result.length){
      root = result[0]; 
      res.push(root.val);
      result.splice(0,1);
      if(root.right) {
          result.unshift(root.right);
          root = root.right;
          if(root) {
            result = repetitive(root,result)          
          }
      }
    }
    
  return res;  
};
