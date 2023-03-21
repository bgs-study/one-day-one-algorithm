// 존재ㅇ : 실행시간 1 / 존재 x: 실행시간 5
// 공간 부족 => 오랫동안 참조되지 않은 페이지 빼고 추가

function solution(cacheSize, cities) {
    if(!cacheSize) return cities.length * 5;
    let cache = [];
    let time = 0;
    
    cities.forEach(city => {
        city = city.toLowerCase();
        let cacheIdx = cache.indexOf(city);

        if(cacheIdx > -1) {
            cache.splice(cacheIdx, 1)
            cache.push(city);
            time ++;
        }

        else {
            if(cache.length === cacheSize) cache.shift();
            cache.push(city);
            time += 5;
        }
    })
    
    return time;
}
