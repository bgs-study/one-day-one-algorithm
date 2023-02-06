function solution(s) {
  let left = 0;
  let answer = false;

  for (let [idx, el] of s.split("").entries()) {
    if (el === '(') {
      left++;
    } 
    else {
      left--;
      if (left < 0) {
        break;
      }
      if (left === 0 && idx === s.length - 1) {
        answer = true;
      }
    }
  return answer;
}
