const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n,m] = input[0].split(' ');
const maps = [...input.slice(1).map((map) => map.trim().split('').map(v => +v))];

function solution(n, m, maps) {
    let visited = [...maps].map((r) => r.map((c) => 1));
    let queue = [[0, 0]];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while (queue.length > 0) {
        let [x, y] = queue.shift();
        for (let j = 0; j < 4; j++) {
            nx = x + dx[j];
            ny = y + dy[j];

            if ( nx >= 0 && nx < n && ny >= 0 && ny < m ){
                if(maps[nx][ny] === 1 && visited[nx][ny] === 1){
                    visited[nx][ny] = visited[x][y] + 1;
                    queue.push([nx,ny]);
                }
            }
        }
    }
    return visited[n-1][m-1] === 1 ? -1 : visited[n-1][m-1];
}

console.log(solution(n, m, maps));