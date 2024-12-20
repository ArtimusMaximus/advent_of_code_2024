const { MullItOver } = require("./q3");
const fs = require("fs");

// const input = "testInput2.txt";
const input = "trueInput.txt";

const testInput = fs.readFileSync(`${input}`, "utf8", (err, data) => {
    if (err) console.error(err);
    else return data;
});

class MaybeMullItOver extends MullItOver {
    constructor(input) {
        super(input);
        this.regex = /mul[\\(]\d*,\d*[\\)]|don't[\\(][\\)]|do[\\(][\\)]/g;
    }
    sliceIndexOfDont() {
        const len = this.search.length;
        console.log("this.search.length", len);
        const countOfDonts = this.search.filter(i => i === "don't()").length;

        let dontIndex = this.search.indexOf("don't()");
        let doIndex = this.search.indexOf("do()");
        let originalArr = [...this.search];

        for (let i = 0; i < countOfDonts; i++) {
            console.log(dontIndex, doIndex);
            if (dontIndex !== -1) {
                this.search.splice(dontIndex, (doIndex - dontIndex) + 1).concat(originalArr.slice((doIndex - dontIndex) + 1));
            }
            dontIndex = this.search.indexOf("don't()");
            doIndex = this.search.indexOf("do()", dontIndex);
        }
        return this;
    }
    filterOutDo() {
        const filteredOut = this.search.filter(i => i !== "do()");
        this.search = [...filteredOut];
        return this;
    }
}

const maybeMullItOver = new MaybeMullItOver(testInput);

const total = maybeMullItOver
    .setSearch()
    .sliceIndexOfDont()
    .filterOutDo()
    .addMul()
    .getMulTotal();


// const searchResults = maybeMullItOver.search;
// console.log(searchResults);
console.log("total\t", total);