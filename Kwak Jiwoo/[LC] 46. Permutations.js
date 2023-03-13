// 주어진 배열의 값으로 가능한 모든 조합을 구하시오.

var permute = function(nums) {
    let result = [];
    Permutation([], nums);
    return result;

    function Permutation(permutation, restNums) {
        if(permutation.length === nums.length) return result.push(permutation);
        restNums.forEach(num => {
            Permutation([...permutation, num], restNums.filter(v => v !== num))
        })
    }
};
