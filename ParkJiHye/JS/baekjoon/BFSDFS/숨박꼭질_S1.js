const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map((v) => +v);
let map = new Array(100001).fill(0);

function solution(n, k) {
	let queue = [[n, 0]];
    map[n] = 1;
    
    while (queue.length > 0) {
        const [x, count] = queue.shift();
        if ( x === k ) { console.log(count); break;}
        for (let nx of [x - 1, x + 1, x * 2]) {
            if (nx >= 0 && nx <= 100000 && map[nx] === 0) {
                map[nx] = 1;
                queue.push([nx, count + 1]);
            }
        }
    }   
}

solution(N, K);