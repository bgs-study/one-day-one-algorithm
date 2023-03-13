// 내부에 서클이 존재하는 연결리스트가 주어졌을 때, 서클이 시작되는 노드를 반환하시오.
// (서클 없다면 -1 반환)

var detectCycle = function(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next; // fast는 slow의 2배로 움직임 -> 서클이 있다면 slow랑 만남
        if(slow === fast){ 
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}
