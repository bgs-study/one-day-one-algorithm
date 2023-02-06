//짝지어 제거하기
s = 'baabaa';

function solution(s) {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
		else stack.pop();
	}

	return stack.length ? 0 : 1;
}

/* 나의 풀이
function solution(s) {
	answer = 0;
	s = s.split('');

	while (answer !== s.length - 1) {
		for (let i = 0; i < s.length; i++) {
			if (s[i] === s[i + 1]) {
				s.splice(i, 2);
				break;
			}
			answer = i;
		}
		if (s.length === 0) {
			break;
		}
	}
	return s.length === 0 ? 1 : 0;
}*/