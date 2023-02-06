const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const [N, M] = [...input[0].split(' ')];
const arr = [...input.slice(1)];
const packages = 6;

function solution(N, M, arr) {
	let package = [];
	let single = [];
    
	arr.forEach((a) => {
		const [p, s] = a.split(' ').map(Number);
		package = [...package, p];
		single = [...single, s];
	});

	let [singleMin, packageMin] = [Math.min(...single), Math.min(...package)];

	if (packages > N) {
		if (singleMin * N <= packageMin) {
			return singleMin * N;
		} else {
			return packageMin;
		}
	} else {
		return Math.min(
			singleMin * N,
			packageMin * Math.ceil(N / packages),
			singleMin * (N % packages) + packageMin * parseInt(N / packages),
		);
	}
}

console.log(solution(N, M, arr));
