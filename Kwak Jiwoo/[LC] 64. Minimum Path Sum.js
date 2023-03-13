// 주어진 2차원 배열의 [0,0]을 시작점으로 아래, 오른쪽으로만 움직일 수 있다. 끝까지 움직여서 얻을 수 있는 최소값을 반환하시오.

var minPathSum = function(grid) {
    
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[r].length; c++) {
            let cur = grid[r][c];
            if(r === 0 && c === 0) continue;
            if(r-1 < 0) grid[r][c] = grid[r][c-1] + cur;
            else if(c-1 < 0) grid[r][c] = grid[r-1][c] + cur;
            else grid[r][c] = Math.min(grid[r][c-1], grid[r-1][c]) + cur;
        }
    }

    return grid[grid.length-1][grid[0].length-1];
};
