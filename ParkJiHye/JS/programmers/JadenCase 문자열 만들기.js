function solution(s) {
    s = s
        .split(' ')
        .map((el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase())
        .join(' ');
    return s;
}