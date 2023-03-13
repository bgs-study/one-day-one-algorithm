// 중복이 허용된 숫자들의 배열 nums의 모든 조합을 반환하시오.

// 나의 풀이 (통과했으나 느림)
var permuteUnique = function(nums) {
    let result = [];
    permutation([], nums);

    function permutation(arr, restNums) {
        if(arr.length === nums.length) return result.push(arr);
        restNums.forEach((n, i) => {
            permutation([...arr, n], restNums.filter((num, idx) => i !== idx));
        })
    }

    result = Array.from(new Set(result.map(v => JSON.stringify(v))));

    return result.map(permutation => JSON.parse(permutation));
};

// 참고 풀이
var permuteUnique = function(nums) {
    nums.sort((a,b) => a - b);
    let result = [];
    permutation([], nums);
    return result;

    function permutation(arr, restNums) {
        if(arr.length === nums.length) return result.push(arr);

        for(let i = 0; i < restNums.length; i++) {
            if(restNums[i] === restNums[i-1]) continue; // 앞에 같은 수가 있어서 반복하면 중복되니 패스
            permutation([...arr, restNums[i]], restNums.filter((num, idx) => i !== idx));
        }
    }
};
