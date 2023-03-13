// 누르면 알파벳이 입력되는 숫자 다이얼과 이로 가능한 알파벳의 조합을 구하시오.

var letterCombinations = function(digits) {
    if(digits === '') return [];

    let dial = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    digits = digits.split('');

    function recursion(arr, digits) {
        let digit = digits.shift();
        let alphabets = dial[digit];
        let result = [];

        // 맨 처음이라면 일단 누르는 알파벳 들어감
        if(!arr.length) result = alphabets.split('');
        else {
            for(let alphabet of alphabets) { 
                arr.forEach(str => result.push(str + alphabet));
            }
        }
        
        if(!digits.length) return result;
        return recursion(result, digits);
    }

    return recursion([], digits);
};
