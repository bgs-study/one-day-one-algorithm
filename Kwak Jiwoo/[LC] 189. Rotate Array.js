// nums의 값을 오른쪽으로 k만큼 회전한 결과를 반환하시오. 공간 복잡도 O(1)

var rotate = function(nums, k) {
    k = k % nums.length;
    nums.unshift(...nums.splice(nums.length-k, k));
}
