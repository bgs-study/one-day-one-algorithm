function solution(k, dungeons) {
	let result = [];
	const dungeonCount = dungeons.length;

	function getPermutations(arr, num) {
		const results = [];
		if (num === 1) return arr.map((v) => [v]);

		arr.forEach((fixed, index, origin) => {
			const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
			const permutations = getPermutations(rest, num - 1);
			const attached = permutations.map((v) => [fixed, ...v]);
			results.push(...attached);
		});
		return results;
	}

	const permutations = getPermutations(
		Array(dungeonCount)
			.fill()
			.map((_, i) => i),
		dungeonCount
	);

	for (let i = 0; i < permutations.length; i++) {
		let pass = 0;
		let fatigue = k;
		const order = permutations[i];

		for (let j = 0; j < order.length; j++) {
			const [need, spend] = dungeons[order[j]];

			if (need <= fatigue) {
				fatigue -= spend;
				pass++;
                if( j === order.length - 1) result.push(pass);
			} else {
				result.push(pass);
				break;
			}
		}
	}
	return Math.max(...result);
}

console.log(solution(80, [[80, 20],[50, 40],[30, 10]]));