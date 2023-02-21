function solution(clothes) {
	var answer = 1;
	var obj = {};
	for (var i = 0; i < clothes.length; i++) {
		obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
	}
	for (var key in obj) {
		answer *= obj[key];
	}
	return answer - 1;
}
/* 다른 풀이 
function solution(clothes) {
	return 
        Object.values(
            clothes.reduce((obj, t)=> {
                obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
                return obj; 
            } , {})
        ).reduce((a,b)=> a*(b+1), 1) -1; 
}
*/