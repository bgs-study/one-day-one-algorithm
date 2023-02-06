function solution(numbers, target) {
    let answer = 0;
    DFS(0, 0);

    function DFS(level, sum) {
        if (level === numbers.length) {
            if (sum === target) {
                answer += 1;
            }
            return;
        }
        DFS(level + 1, sum + numbers[level]);
        DFS(level + 1, sum - numbers[level]);
	};
    return answer;
}