// 주어진 트리를 right로만 연결해서 연결리스트의 형태를 만드시오

 function preOrderTraversal(root) {
     let result = [];
     let stack = [root];

     while(stack.length) {
         let cur = stack.pop();
         if(!cur) break;
         result.push(cur.val);
         if(cur.right) stack.push(cur.right);
         if(cur.left) stack.push(cur.left);
     }

     return result;
 }

var flatten = function(root) {
    let nodes = preOrderTraversal(root);
    let cur = root;
    nodes.shift();

    // 기존의 트리 수정
    while(nodes.length) {
        cur.right = new TreeNode(nodes.shift());
        cur.left = null;
        cur = cur.right;
    }

    return root;
};
