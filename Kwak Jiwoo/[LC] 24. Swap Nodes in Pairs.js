// 인접한 두 노드마다 swap하고 head를 반환하시오. (노드의 값을 바꾸면 안되고 노드 자체를 바꿔야 함)

var swapPairs = function(head) {
    if(head === null || head.next === null) return head;

    let pre = null, cur = head, next;

    while(cur && cur.next) {
        next = cur.next;

        // next 연결
        cur.next = next.next;
        next.next = cur;

        // cur 앞이 있다면 연결해주고, 아니면 head를 앞으로 이동한 next로 지정
        if(pre) pre.next = next;
        else head = next;

        pre = cur;
        cur = cur.next;
    }

    return head;
};
