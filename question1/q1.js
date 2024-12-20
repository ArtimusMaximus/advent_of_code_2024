const fs = require('fs');

let testInput = fs.readFileSync("inputFileTest.txt", "utf8", (err, data) => {
	if (err) console.error(err);
	else return data;
});

let input = fs.readFileSync("trueInput.txt", "utf8", (err, data) => {
	if (err) console.error(err);
	else return data;
});
function sortList(list) {
	if (!list.length) {
		console.log("list was empty");
		return;
	}
	for(let i=0; i<list.length - 1; i++) {
		for(let j=0; j<list.length - i - 1; j++) {
			if (list[j] > list[j+1]) {
				let temp = list[j];
				list[j] = list[j+1];
				list[j+1] = temp;
			}
		}
	}
	return list;
}
const list1 = input.split("\n").filter(c => c !== "" && c !== "    ").map((pair) => pair.split("   ").map((a) => {
    return parseInt(a);
})).map(a => a.pop());
const list2 = input.split("\n").filter(c => c !== "" && c !== "    ").map((pair) => pair.split("   ").map((a) => {
    return parseInt(a);
})).map(a => a.shift());

const sortedList1 = sortList(list1);
const sortedList2 = sortList(list2);

function pairLists(list1, list2) {
	let aux = [];
	for(let i=0; i<list1.length; i++) {
		aux.push(Math.abs(list1[i] - list2[i]));
	}
	return sum(aux);
}
function sum(arr) {
	let total = 0;
	for(const n of arr) {
		total += n;
	}
	return total;
}
const answer = pairLists(sortedList1, sortedList2);

function checkOccurrences(a1, a2) {
	let countObj = {};
	for (let i=0; i<a1.length - 1; i++) {
		if (a2.includes(a1[i])) {
			if (!countObj.hasOwnProperty(a1[i])) {
				countObj[a1[i]] = 1;
			} else {
				countObj[a1[i]] += 1;
			}
		}
	}
	let total = 0;
	let keysTimesValues = () => {
		let keysArr = Object.keys(countObj).map(n => parseInt(n));
		let valsArr = Object.values(countObj);
		console.log(keysArr, valsArr);
		for(let i=0; i<keysArr.length; i++) {
			total += keysArr[i] * valsArr[i];
		}
	}
	keysTimesValues();
	return total;
}
let c = checkOccurrences(sortedList1, sortedList2);
console.log("countObj total\t", c);
