// 2차원 배열의 두 값을 선으로 이을 때, 겹치는 부분을 모두 통합한 결과를 반환하시오.
var merge = function(intervals) {
    let result = [];
    intervals.sort((a,b) => a[0] - b[0]);

    intervals.forEach(interval => {
        let lgth = result.length;
        if(lgth > 0 && interval[0] <= result[lgth-1][1]) result[lgth-1][1] = Math.max(result[lgth-1][1], interval[1]);
        else result.push(interval);
    })

    return result;
 };
