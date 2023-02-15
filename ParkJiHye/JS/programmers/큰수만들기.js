function solution(number, k) {
    const arr = [];
    for (let i = 0; i < number.length; i++) {
        while ( arr[arr.length - 1] < number[i] && k > 0) {
            k--;
            arr.pop();
        }
        arr.push(number[i]);    
    }
    arr.splice(arr.length - k, k); 
    return arr.join("");
}