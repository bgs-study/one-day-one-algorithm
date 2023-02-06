function solution(n, words) {
    let initLast = words[0][words[0].length - 1];     
    let last = initLast;
    let pass = [];

    while(words.length > 0){
        w = words.shift();
        if(pass.length === 0){ pass.push(head); continue;}
        
        if (pass.includes(w) || last !== w[0]) {
			return [(pass.length % n) + 1, parseInt(pass.length / n) + 1];
		}
        else{ 
            last = w[w.length - 1];
            pass.push(w);
        }
    }
    return [0,0];
}