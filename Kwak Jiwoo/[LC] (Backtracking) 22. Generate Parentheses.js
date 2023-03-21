// n개의 괄호가 문자열로 주어졌을 때, 닫힌 괄호가 되는 모든 문자열을 구하시오.

var generateParenthesis = function(n) {
    let result = [];

    // openN: str내의 '('의 개수 / closedN: str내의 ')'의 개수
    // ')'는 '('보다 많이 들어갈 수 없음
    function backtrack(openN, closedN, str) {
        if(openN === n && closedN === n) return result.push(str);
        if(openN < n) backtrack(openN + 1, closedN, str + '(');
        if(closedN < openN) backtrack(openN, closedN + 1, str + ')');
    }

    backtrack(0,0,'');
    return result;
};
