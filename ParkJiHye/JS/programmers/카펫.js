function solution(brown, yellow) {
	let total = brown + yellow;

	for (let i = 1; i <= total / 2; i++) {
		let width = total / i;
		let height = i;

		if ((width - 2) * (height - 2) === yellow && width >= height) {
			return [width, height];
		}
	}
}
