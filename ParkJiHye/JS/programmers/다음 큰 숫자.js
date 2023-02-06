// 다음 큰 숫자

function solution(n) {
	bin = n.toString(2).split('');
	one = bin.reduce((acc, cur) => acc + (cur === '1' ? 1 : 0), 0);

	p = n + 1;
	while (
		one !==
		p
			.toString(2)
			.split('')
			.reduce((acc, cur) => acc + (cur === '1' ? 1 : 0), 0)
	) {
		p++;
	}
	return p;
}