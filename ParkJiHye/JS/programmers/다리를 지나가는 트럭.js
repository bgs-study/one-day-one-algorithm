function solution(bridge_length, weight, truck_weights) {
	const bridge = Array.from({ length: bridge_length }, (_) => 0);
	let curWeight = 0;
	let time = 0;
	while (truck_weights.length) {
		time++;
		curWeight -= bridge.shift();
		if (curWeight + truck_weights[0] > weight) {
			bridge.push(0);
		} else {
			const curTruck = truck_weights.shift();
			bridge.push(curTruck);
			curWeight += curTruck;
		}
	}
	return time + bridge_length;
}
/* 다른 솔루션
function solution(bridge_length, weight, truck_weights) {
	var answer = 0;
	let bridge = [];
	let bridge_weight = 0;
	while (truck_weights.length > 0) {
		answer++;
		if (bridge.length === bridge_length) {
			bridge_weight -= bridge.shift();
		}
		if (bridge_weight + truck_weights[0] > weight) {
			bridge.push(0);
			continue;
		}
		let truck_weight = truck_weights.shift();
		bridge.push(truck_weight);
		bridge_weight += truck_weight;
	}
	return answer + bridge_length;
}
*/