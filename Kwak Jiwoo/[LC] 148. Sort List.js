// 단일 연결리스트를 오름차순으로 정렬하시오.
// 시간복잡도: O(n logn) / 공간복잡도: O(1)

// 시간복잡도가 가능하려면 합병정렬(한 자리로 나눴다가 정렬하면서 다시 합침)
var sortList = function(head) {
    if(!head || !head.next) return head;

    // head를 두 개의 리스트로 나누기 위해 중앙을 구하는 과정
    let slow = head, fast = head.next;
    // fast가 slow의 2배로 움직이기 때문에 fast가 리스트를 벗어나면 slow가 중앙이 됨
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // head가 왼쪽, right가 오른쪽 리스트가 됨
    let right = slow.next;
    slow.next = null; // 리스트 사이를 끊기
    return merge(sortList(head), sortList(right)); // 재귀
};

const merge = (list1, list2) => {
    // 합병할 list1, 2의 값을 비교하여 쭉 연결시킬 새 노드 생성
    let tail = new ListNode(-1), head = tail;

    while(list1 && list2) {
        if(list1.val < list2.val) {
            tail.next = list1; // list1의 값이 작으니 정렬시킴
            list1 = list1.next;
        }
        else {
            tail.next = list2; // list2의 값이 작으니 정렬시킴
            list2 = list2.next;
        }
        tail = tail.next;
    }
    if(list1) tail.next = list1; // 남아있다면 연결
    if(list2) tail.next = list2;

    return head.next; // head의 첫번째 리스트는 비어있으므로 next가 첫 값
}
