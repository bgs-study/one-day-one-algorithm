// 주어진 트리가 이진 탐색 트리(BST)인지 확인해서 boolean을 반환하시오.
// 이진 탐색 트리: 왼쪽 트리의 모든 노드값은 작고, 오른쪽 트리는 큰 트리

var isValidBST = function(root) {
    let queue = [root];
    let cur;

    // 트리의 모든 노드 순회
    while(queue.length) {
        cur = queue.shift(); 
        let leftChildQue = [], rightChildQue = []; // 현재 노드의 왼쪽 트리, 오른쪽 트리의 노드 저장할 큐
        let leftChild, rightChild; // 큐에 저장된 왼쪽, 오른쪽 트리의 각 노드

        if(cur.left) {
            leftChildQue.push(cur.left);
            queue.push(cur.left);
        }
        if(cur.right) {
            rightChildQue.push(cur.right);
            queue.push(cur.right);
        }

        // 왼쪽 트리 확인
        while(leftChildQue.length) {
            leftChild = leftChildQue.shift();
            if(leftChild.val >= cur.val) return false;
            if(leftChild.left) leftChildQue.push(leftChild.left);
            if(leftChild.right) leftChildQue.push(leftChild.right);
        }

        // 오른쪽 트리 확인
        while(rightChildQue.length) {
            rightChild = rightChildQue.shift();
            if(rightChild.val <= cur.val) return false;
            if(rightChild.left) rightChildQue.push(rightChild.left);
            if(rightChild.right) rightChildQue.push(rightChild.right);
        }
    }

    return true;
};
