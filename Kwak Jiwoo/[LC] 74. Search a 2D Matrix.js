// 2배원 배열이 주어질 때, target이 배열 안에 존재하는지 유무를 반환하시오.
// 각 행은 오름차순으로 정렬/ 각 행의 첫 숫자는 전 행의 마지막 숫자보다 큼 / 시간복잡도 O(log(m * n))

var searchMatrix = function(matrix, target) {
    for(let r = 0; r < matrix.length; r ++) {
        let row = matrix[r];
        if(row[0] <= target && row[row.length-1] >= target) {
            for(let c = 0; c < row.length; c++) {
                if(row[c] === target) return true;
            }
            return false;
        }
    }
    return false;
};
