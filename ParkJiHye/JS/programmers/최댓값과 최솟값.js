function solution(s) {  
    s = s.split(' ')
    return `${Math.min(...s)} ${Math.max(...s)}`;
    // s.sort((a, b) => parseInt(a) - parseInt(b));
    // return `${s[0]} ${s[s.length - 1]}`;
}