// 주어진 배열의 숫자를 더해서 target이 되는 조합의 경우의 수를 모두 구하시오. (숫자 중복 가능)

function combinationSum(candidates, target) {
    let temp = [];
    let result = [];
    search(0, target);
    return result;

    function search(idx, sum) {
        if(sum === 0) return result.push([...temp]); // 합계가 딱 target이면 result에 조합 추가
        // 합계가 target을 초과 or 다 더해도 target보다 작아서 idx가 초과하면 return
        if(sum < 0 || idx >= candidates.length) return; 

        temp.push(candidates[idx]); // 현재값 넣어주고
        search(idx, sum - candidates[idx]); // 현재값 중복으로 넣도록 재귀
        temp.pop(); // 넣었던 현재값 빼고
        search(idx+1, sum); // 현재값 아예 안들어가도록 다음값부터 재귀
    }
}
