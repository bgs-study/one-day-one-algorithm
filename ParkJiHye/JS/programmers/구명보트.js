function solution(people, limit) {
	let answer = 0;
	people.sort((a, b) => a - b);
	while (people.length > 1) {
		if (people[0] + people[people.length - 1] <= limit) {
			answer++;
			people.shift();
			people.pop();
		} else {
			answer++;
			people.pop();
		}
	}
	return people.length === 0 ? answer : answer + 1;
}