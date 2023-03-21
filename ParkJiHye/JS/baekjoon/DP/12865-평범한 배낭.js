function solution(N, K, info) {
    const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

	for (let i = 1; i < N + 1; i++) {
		const [W, V] = info[i-1];
		for (let j = 1; j <= K; j++) {
			if (j - W >= 0) dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
			else dp[i][j] = dp[i - 1][j];
		}
	}
    console.log(Math.max(...dp[N]));
}

const [ line, ...informs] = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

solution(
	...line.split(' ').map(v => +v),
	informs.map((info) => info.split(' ').map((v) => +v)),
);
