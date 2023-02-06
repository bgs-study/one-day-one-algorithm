 // 노드를 전위순회(루트->왼->오), 중위순회(왼->루트->오)한 배열을 보고 트리의 형태를 반환하시오.
 // 트리의 형태를 만드는 함수 TreeNode 제공

 // preorder(전위): 루트 -> 왼쪽 트리 -> 오른쪽 트리
 // inorder(중위): 왼쪽 트리 -> 루트 -> 오른쪽 트리
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;

    let root = new TreeNode(preorder[0]); // preorder[0]은 무조건 트리의 root임
    let mid = inorder.indexOf(preorder[0]); // inorder에서 루트 위치 => 이를 기준으로 왼쪽 트리/오른쪽 트리
    root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid)); // 루트 왼쪽 자식 트리 넣기
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1)); // 루트 오른쪽 자식 트리 넣기

    return root;
};
