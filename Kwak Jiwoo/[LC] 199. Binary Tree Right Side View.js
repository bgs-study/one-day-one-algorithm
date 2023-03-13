// 트리의 오른쪽에서 볼 수 있는 노드를 위에서 아래 순서로 나열한 배열을 구하시오.
// BFS를 활용한 풀이
var rightSideView = function(root) {
    let result = [];
    let queue = [root];

    if(!root) return result;
    
    while(queue.length) { 
        let lgth = queue.length; // 위 레벨의 모든 노드가 큐에 저장된 상태

        for(let i = 0; i < lgth; i++) {
            let node = queue.shift();
            if(i === lgth-1) result.push(node.val); // 위 레벨의 가장 마지막 노드라면, 보일테니까 저장
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return result;
};
