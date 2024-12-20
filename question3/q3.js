const fs = require("fs");

const input = "testInput.txt";
// const input = "trueInput.txt";

const testInput = fs.readFileSync(`${input}`, "utf8", (err, data) => {
	if (err) console.error(err);
	else return data;
});


class MullItOver {
	constructor(input) {
		this.regex = /mul[\\(]\d*,\d*[\\)]/g;
		this.search = [];
		this.input = input;
		this.mulTotal = 0;
	}
	setSearch() {
		this.search = [...this.input.match(this.regex)] || null;
		return this;
	}
	getSearch() {
		return this;
	}
	getMulTotal() {
		return this.mulTotal;
	}
	mul(a, b) {
		return a * b;
	}
	evalMulString(str) {
		const mul = this.mul;
		return eval(str);
	}
	addMul() {
		const len = this.search.length;
		for (let i = 0; i < len; i++) {
			const mul = this.search[i];
			const mulN = this.evalMulString(mul);
			this.mulTotal += mulN;
		}
		return this;
	}
	getMethods() {
		return this;
	}
}

const mullItOver = new MullItOver(testInput);

mullItOver
	.setSearch()
	.getSearch()
	.addMul()
	.getMulTotal();


module.exports = { MullItOver };



