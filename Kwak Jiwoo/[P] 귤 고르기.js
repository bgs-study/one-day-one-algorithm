// 적은 데이터의 이동은 객체가 빠르나, 많아질수록 map이 빠름

// Map 이용
function solution(k, tangerines) {
    let result = 0;
    let cnt = new Map();

    tangerines.forEach(n => cnt.set(n, (cnt.get(n) || 0) + 1))
    cnt = Array.from(cnt.values()).sort((a,b) => b - a);

    while(k > 0) {
        k -= cnt.shift();
        result ++;
    }
    return result;
}

// 객체 이용
function solution(k, tangerines) {
    let result = 0;
    let cnt = {};

    tangerines.forEach(n => cnt[n] = (cnt[n] || 0) + 1);
    cnt = Object.values(cnt).sort((a,b) => b - a);

    while(k > 0) {
        k -= cnt.shift();
        result ++;
    }
    return result;
}
