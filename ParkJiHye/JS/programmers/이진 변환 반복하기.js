function solution(s) {
  let zero = 0;
  let loop = 0;

  while(s !== '1') {
    step1 = s.split('').filter((data) => data === '1');
    one = step1.length;
    zero += s.length - step1.length;
    s = one.toString(2);
    loop++;
  }
  return [loop, zero];
}