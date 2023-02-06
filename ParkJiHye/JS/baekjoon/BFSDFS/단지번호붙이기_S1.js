const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const size = parseInt(input[0]);
const inform = [...input.slice(1)];
let graph = inform.map((info) => info.trim().split('').map(v => +v));

let count = 0;
let sections = 0;
let perSection = [];

const dx = [0,0,1,-1];
const dy = [1,-1,0,0];

function DFS(x,y) {
    if (x < 0 || x >= size || y < 0 || y >= size) return false
    if (graph[x][y] === 1){
        count++;
        graph[x][y] = 0;

        for (let i = 0; i < 4; i++) {
            nx = x + dx[i];
            ny = y + dy[i];
            DFS(nx,ny);
        }
        return true;
    }
    return false;
}

for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        if (DFS(i,j) === true){
            perSection.push(count);
            sections += 1;
            count = 0;
        }
    }
}
console.log(sections);
perSection.sort( (a,b) => a - b);
perSection.forEach( (section) => console.log(section));
