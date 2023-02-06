// 숫자의 표현
// 자연수 n을 연속한 자연수들로 표현 하는 방법
function solution(n) {
    sum = 0;
    answer = 0;

    max = n % 2 == 0 ? parseInt(n / 2) : parseInt( n / 2 )+ 1;
    for( let i = 1; i <= max ; i++){
        sum = 0;
        for (let j = i; j <= max; j++) {
            sum += j;
            if (sum === n) {
                answer++;
                break;
            }
            else if ( sum >= n) { break;}
		}
    }
    return n === 1 ? answer : answer + 1;
}
