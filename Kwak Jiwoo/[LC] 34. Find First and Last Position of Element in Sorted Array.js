// 오름차순으로 정렬된 배열 안에서 target이 있는 시작, 끝 인덱스를 반환하시오.

// 1. 나의 풀이 (통과했으나 매우 느림
var searchRange = function(nums, target) {
    if(nums.length === 1) {
        if(nums[0] === target) return [0, 0];
        else return [-1, -1]
    }
    
    let result = [-1, -1];
    let start = 0, end = nums.length - 1, middle;

    while(start <= end) {
        middle = Math.floor((start + end)/2);

        if(nums[middle] === target) {
            if(nums[middle-1] !== target) result[0] = middle;
            if(nums[middle+1] !== target) result[1] = middle;
            if(nums[middle-1] !== target && nums[middle+1] !== target) return [middle, middle];

            if(!result.includes(-1)) return result; // 시작, 끝 찾음
            if(result[0] !== -1) { // 시작만 찾음
                start ++;
                end ++;
            }
            else { // 끝만 찾거나, 둘다 못 찾음(start,middle,end 모두 target인 경우)
                start --;
                end--;
            }
        }

        else if(nums[middle] < target) start = middle + 1;
        else end = middle - 1;
    }

    return result;
};

2. solutions 참고 풀이
var searchRange = function(nums, target) {
    // 이진검색으로 배열 안에서 target이 시작되는 인덱스 찾기
    const find = (target, start = 0, end = nums.length - 1) => {
        while(start <= end) {
            let mid = Math.floor((start + end)/2);
            if(nums[mid] < target) start = mid + 1;
            else end = mid - 1; // 크거나 같으면 end를 이동(시작지점을 찾아야 하니까)
        }
        return start;
    }
    
    let start = find(target);
    if(nums[start] !== target) return [-1, -1];
    // target+1을 찾으면 target보다 큰 곳의 인덱스가 반환됨 -> -1하면 target의 끝 지점
    return [start, find(target+1, start) - 1];
};
