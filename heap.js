class Node {
    left = null;
    right = null;
    value = null;
    constructor(value, left=null, right=null) {
      this.left = left;
      this.value = value;
      this.right = right;
    }
}

function heapify(array) {
   let nodesList = [];
   nodesList.length = array.length;
   for (var i in array) {
      let node = new Node(array[i]);
      node.parent = null;
      node.left = new Node(array[2*i + 1]);
      node.right = new Node(array[2*i + 2]);
      if (i) {
        node.parent = i%2 === 0 ? new Node(array[i/2 - 1]) : new Node(array[Math.floor(i/2)]);
      }
      nodesList[i] = node;
   }
   
   for(var j in nodesList) {
    nodesList[j].left = nodesList[2*j +1];
    nodesList[j].right = nodesList[2*j +2];
   }
   let treeNode = nodesList[0];   
   return treeNode;
}
