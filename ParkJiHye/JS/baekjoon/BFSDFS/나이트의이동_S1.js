const fs = require('fs');
// /dev/stdin
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const count = parseInt(input[0]);

function initData(input) {
	let width = [];
	let start = [];
	let end = [];
	for (let i = 1; i < input.length; i+=3) {
		let [w,s,e] = input.slice(i,i+3);
		start = [...start, s.split(' ').map(v=>+v)]
		end = [...end, e.split(' ').map(v=>+v)];
		width = [...width, parseInt(w)];
	}
	return [start,end,width];
}

function initMaps(width) {
	let maps = []
	for (let i = 0; i < width.length; i++){
		maps.push(
			Array(width[i])
				.fill()
				.map(() => Array(width[i]).fill(0)),
		);	
	}
	return maps;
}

function solution(start, end, width) {
	let Case = 0;
	let maps = initMaps(width);

	while (Case < count) {
		const w = width[Case];
		const [startX, startY] = start[Case];
		const [endX, endY] = end[Case];
		let queue = [[startX, startY]];

		if (startX === endX && startY === endY) { console.log(0); Case++; continue;}
		let map = maps[Case];
		map[startX][startY] = 1;
		
		while (queue.length > 0) {
            const [x,y] = queue.shift();
			for (let [nx, ny] of [
				[x - 2, y + 1],
				[x - 1, y + 2],
				[x + 1, y + 2],
				[x + 2, y + 1],
				[x + 2, y - 1],
				[x + 1, y - 2],
				[x - 1, y - 2],
				[x - 2, y - 1],
			]) {
				if (nx >= 0 && ny >= 0 && nx < w && ny < w ) {
					if (map[nx][ny] === 0) {
						map[nx][ny] = map[x][y] + 1;
						queue.push([nx, ny]);
						if (nx === endX && ny === endY) {
							console.log(map[nx][ny] - 1);
							queue = [];
							break;
						}
					}
				}
			}
		}
		Case++;
	}
}
solution(...initData(input));