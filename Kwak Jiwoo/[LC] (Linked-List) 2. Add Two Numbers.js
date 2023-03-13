// 두 개의 연결리스트의 값을 역순으로 이어서 숫자를 만들어 더한 값의 연결리스트를 만드시오.

var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0);
    let cur = List;
    let sum = 0;
    let up;

    while(l1 || l2 || sum > 0) {
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        if(sum >= 10) { // 더해서 10이 넘으면 1이 다음 값으로 넘어감
            up = 1;
            sum -= 10;
        }

        // 더해서 값이 나와야 노드 생성 
        // -> 지금 계산한 값을 현재 노드가 아닌 다음 노드에 넣음
        // -> 계산한 값을 현재에 넣고 다음 노드를 미리 만들어놓으면, 값이 나오지 않을 시에는 만들면 안되서 예외처리 따로 필요함
        cur.next = new ListNode(sum);
        cur = cur.next;
        sum = up;
        up = 0;
    }

    return List.next; // 맨 앞은 비어있으므로 next부터 반환
};
