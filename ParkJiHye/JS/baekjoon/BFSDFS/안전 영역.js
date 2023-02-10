const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const size = +input[0];
const map = input.slice(1).map((i) =>
	i
		.trim()
		.split(' ')
		.map((v) => +v),
);
const rainMin = Math.min(...map.flat());
const rainMax = Math.max(...map.flat());

function dfs(x, y, rain, visited) {
	for (let [nx, ny] of [
		[x + 1, y],
		[x - 1, y],
		[x, y - 1],
		[x, y + 1],
	]) {
		if (nx >= 0 && nx < size && ny >= 0 && ny < size && !visited[nx][ny]) {
			visited[nx][ny] = true;
			dfs(nx, ny, rain, visited);
		}
	}
}

function solution() {
	let maxSection = 1;
	for (let rain = rainMin; rain < rainMax; rain++) {
		let section = 0;
		let visited = [...Array(size)].map((_, x) =>
			[...Array(size)].map((_, y) => map[x][y] <= rain),
		);
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				if (!visited[i][j]) {
					visited[i][j] = true;
					dfs(i, j, rain, visited);
					section++;
				}
			}
		}
		maxSection = Math.max(maxSection, section);
	}
	console.log(maxSection);
}

solution();