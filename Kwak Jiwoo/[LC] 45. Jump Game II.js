// 배열의 각 수가 해당 위치에서 가능한 최대 점프값일 때, 맨 끝에 다다르는 최소 이동 횟수를 구하시오.

// 1차 풀이: DP / O(n^2)으로 느림
var jump = function(nums) {
    if(nums.length <= 1) return 0;
    let minimums = [0];

    for(let i = 1; i < nums.length; i++) {
        let minimum = Infinity;
        // minimums[i] = nums[j] >= i - j 인 값 중에서 minimums[j] + 1의 최소값
        for(let j = 0; j < i; j++) {
            if(nums[j] >= i - j && minimum > minimums[j] + 1) minimum = minimums[j] + 1;
        }
        minimums[i] = minimum;
    }

    return minimums[minimums.length-1];
};

// 2차 풀이: Greedy / O(n)
// 한 번 점프할 때마다 도달할 수 있는 최소 인덱스를 left, 최대를 right로 범위를 지정
// -> left ~ right 안에서 점프에서 도달할 수 있는 범위를 다시 구해서 포인터 옮김 -> 반복

var jump = function(nums) {
    let jumpCnt = 0;
    let left = 0, right = 0;

    while(right < nums.length - 1) {
        let maxJumpIdx = 0;

        
        for(let i = left; i <= right; i++) {
            maxJumpIdx = Math.max(maxJumpIdx, i + nums[i]);
        }

        left = right + 1; 
        right = maxJumpIdx;
        jumpCnt ++;
    }

    return jumpCnt;
};
