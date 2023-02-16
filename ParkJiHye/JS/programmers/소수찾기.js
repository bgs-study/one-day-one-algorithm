function solution(numbers) {
	let result = new Set();

	const temp = (currFix, eachArr) => {
		for (let i = 0; i < eachArr.length; i++) {
			const tempEachArr = [...eachArr];
			const tempCurrFixVal = tempEachArr.splice(i, 1)[0];
			const tempCurrFix = currFix + tempCurrFixVal;
            result.add(Number(tempCurrFix));
			if (tempEachArr.length > 0) temp(tempCurrFix, tempEachArr);
		}
	};

	for (let i = 0; i < numbers.length; i++) {
		const target = numbers[i];
		result.add(Number(target));

		const eachArr = [...numbers];
		eachArr.splice(i, 1);
		temp(target, eachArr);
	}

    result = new Array(...result);
    let count = 0;
    let idx = 0;
    
    while (idx < result.length) {
        let element = result[idx];
        if(element === 1 || element === 0) {count++;}
        for (let i = 2; i < element; i++) {
            if (Number.isInteger(element / i)) {
                count++;
                break;
            }
        }
        idx++;
    }
    return result.length - count;
}

console.log(solution("011"));