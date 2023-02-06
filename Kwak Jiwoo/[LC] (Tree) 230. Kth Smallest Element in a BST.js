 // 트리의 모든 노드 중에서 k번째로 작은 수를 반환하시오.

 const DFS = (root, values = []) => {
     const traverse = (root) => {
         values.push(root.val);
         if(root.left) traverse(root.left);
         if(root.right) traverse(root.right);
     }
     traverse(root);
     return values;
 }

var kthSmallest = function(root, k) {
    let values = DFS(root);
    values.sort((a,b) => a - b);
    return values[k-1];
};
