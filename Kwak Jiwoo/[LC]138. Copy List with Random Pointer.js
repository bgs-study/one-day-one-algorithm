// 주어진 연결리스트의 각 노드는 랜덤하게 다른 노드를 가리키고 있는 포인터가 있음
// 깊은 복사를 하시오. n개의 새로운 노드를 만들어야 하고, 새로운 노드를 가리켜야 합니다.

var copyRandomList = function(head) {
    // 각 노드를 map에 key로, val로 만든 새 노드를 value로 넣기
    let clone = new Map();
    let cur = head;

    while(cur) {
        clone.set(cur, new Node(cur.val));
        cur = cur.next;
    }

    // clone에 저장된 노드에 next와 random을 key로 하는 값을 연결해서 새 노드끼리 연결시키기
    cur = head;

    while(cur) {
        clone.get(cur).next = clone.get(cur.next) || null;
        clone.get(cur).random = clone.get(cur.random) || null;
        cur = cur.next;
    }

    return clone.get(head);
};
