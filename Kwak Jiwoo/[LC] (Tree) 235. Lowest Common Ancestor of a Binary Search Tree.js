// 주어진 두 노드의 가장 낮은 공통 조상을 찾으시오.

var lowestCommonAncestor = function(root, p, q) {
    // 루트부터 타고 내려가다가 두 값을 사이로 찢어지는 지점을 찾기
    while(true) {
        if(p.val < root.val && q.val < root.val) root = root.left;
        else if(p.val > root.val && q.val > root.val) root = root.right;
        else break;
    }
    
    return root;
};
