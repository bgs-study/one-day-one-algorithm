function solution(today, terms, privacies) {
	const perMonth = 28;
	const [Tyear, Tmonth, Tday] = today.split('.').map(Number);

	const todates = Tyear * 12 * 28 + Tmonth * 28 + Tday;

	const termObj = terms.reduce((res, item) => {
		const [kind, duration] = item.split(' ');
		res[kind] = parseInt(duration);
		return res;
	}, {});

	const result = privacies.reduce((acc, cur, idx) => {
		const [date, kind] = cur.split(' ');
		const duration = termObj[kind];
		const [year, month, day] = [...date.split('.').map(Number)];
		const dates = year * 12 * 28 + month * 28 + day + duration * 28;
		if (dates <= todates) acc.push(idx + 1);
		return acc;
	}, []);

	return result;
}
