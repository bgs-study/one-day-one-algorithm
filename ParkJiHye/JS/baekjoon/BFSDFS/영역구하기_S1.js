const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [m, n, areas]= input[0].split(' ').map(Number);
const pos = input.slice(1).map(v => v.split(' ').map(Number));
let output = [...Array(m)].map(() => Array(n).fill(0));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let count = 0;
let section = [];

const draw = (i) => {
	const [x1,y1,x2,y2] = [...pos[i]];
	for (let j = y1; j < y2; j++) {
		for (let i = x1; i < x2; i++) {
			if (!output[j][i]) {
				output[j][i] = 1;
			}
		}
	}
}

const dfs = (x,y) => {
	if (x < 0 || x >= m || y < 0 || y >= n) return false;
	if (output[x][y] === 0) {
		count++;
		output[x][y] = 1;
		for (let i = 0; i < 4; i++) {
			nx = x + dx[i];
			ny = y + dy[i];
			dfs(nx, ny);
		}
		return true;
	}
	return false;
}

for(let i = 0; i <areas; i++) {
	draw(i);
}

for(let j = 0; j < m ; j++) {
	for(let i = 0; i < n; i++){
		if(dfs(j,i) === true){
			section.push(count);
			count = 0;
		}
	}
}

console.log(section.length);
console.log(section.sort((a,b) => a-b).join(' '));