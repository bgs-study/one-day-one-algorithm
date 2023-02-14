const fs = require('fs');
// /dev/stdin
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const G = parseInt(input[0]);
const graph = input.slice(1).map(i => i.trim().split(' ').map(Number));

let output = [...Array(G)].map(()=>Array(G).fill(0));

const dfs = (node, start, visited) => {
    for(let i = 0; i < G; i++) {
        if(graph[node][i] && !visited[i]){
            visited[i] = true;
            output[start][i] = 1;
            dfs(i,start,visited);
        }
    }
}

for(let i = 0; i < G ; i++){
    const visited = Array(G).fill(false);
    dfs(i,i,visited);
}

output.map((li) => li.join(' ').trim()).forEach((v) => console.log(v));