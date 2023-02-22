function solution(priorities, location) {
    let result = 0;
	while (priorities.length > 0) {
		let p = priorities.shift();
		
        if (priorities.filter((el) => el > p).length) {
			priorities.push(p);
		}
        else {
            if (location === 0) {break;}
            result++;
		}
        location < 1 ?  location = priorities.length - 1 : location -= 1;
	}
	return result + 1;
}
