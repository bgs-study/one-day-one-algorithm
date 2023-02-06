//피보나치 수 
// f(0) = 0, f(1) = 1
// f(n) = f(n-1) + f(n-2)
// 2이상의 n이 입력되었을때 n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수
function solution(n) {
    fibo = [0,1];
    for (let i = 0 ; i < n-1 ; i++){
        fibo.push(fibo[i] + fibo[i+1]);
    }
    console.log(fibo[fibo.length - 1]);
    return fibo[fibo.length - 1];
}