const fs = require("fs");

// const input = "testInput.txt";
const input = "trueInput.txt";

const testInput = fs.readFileSync(`${input}`, "utf8", (err, data) => {
	if (err) console.error(err);
	else return data;
});

let splitInput = testInput.split("\n"); // crossword
// console.log('splitInput\t', splitInput);



// puzzle width and height
const width = splitInput[0].length;
const height = splitInput.length;

class CrossWord {
    constructor(crossword, width, height) {
        this.crossword = crossword;
        this.width = width;
        this.height = height;
        this.count = 0;
    }
    getCrossword() {
        console.log(this.crossword);
        return this;
    }
    processVertical() {
        let aux = [];
        this.crossword.forEach((el) => {
            this.doubleLoop(el, aux);
        });
        // console.log(aux);
        aux.forEach((verticalLine) => {
            this.regex(verticalLine);
        });
        return this;
    }
    processHorizontal() {
        for (let x = 0; x < this.height; x++) {
            const element = this.crossword[x];
            this.regex(element);
        }
        return this;
    }
    processDiagonal() {
        let aux = [];
        let el = this.crossword;
        let count = 0;
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 1; y++) {
                let letters = el[count][x][y];
                if(!aux[x]) {
                    aux[x] = [];
                }
                aux[x] += letters;
                count++;
            }
        }
        aux = aux.join("");
        console.log(aux);
        this.regex(aux);
        return this;
    }
    regex(str) {
        // const regex = /samxmas|xmasamx|xmas|samx/gi
        const regex = /XMASAMXMASAMXMAS|SAMXMASAMXMASAMX|SAMXMASAMXMAS|XMASAMXMASAMX|xmasamxmas|samxmasamx|samxmas|xmasamx|xmas|samx/gi
        const c = str.match(regex)?.length || 0;
        const checkForDoubleXmas = str.match(regex);
        if (c !== 0) {
            // if (checkForDoubleXmas.includes("SAMXMASAMXMASAMX")) {
            //     const checkHowMany = checkForDoubleXmas.some(arr => arr.includes("SAMXMASAMXMASAMX"));
            //     this.count += 5
            // } else if (checkForDoubleXmas.includes("XMASAMXMASAMX") || checkForDoubleXmas.includes("SAMXMASAMXMAS")) {
            //     const checkHowMany = checkForDoubleXmas.some(arr => arr.includes("XMASAMXMASAMX"));
            //     this.count += 4
            // } else if (checkForDoubleXmas.includes("XMASAMXMAS") || checkForDoubleXmas.includes("SAMXMASAMX")) {
            //     this.count += 3
            // } else if (checkForDoubleXmas.includes("SAMXMAS") || checkForDoubleXmas.includes("XMASAMX")) {
            //     this.count += 2
            // } else if (checkForDoubleXmas.includes("XMAS") || checkForDoubleXmas.includes("SAMX")) {
            //     const checkHowMany = checkForDoubleXmas.some(arr => arr.includes("XMAS"));
            //     console.log(typeof checkHowMany)
            //         this.count += 1; // ADDITIONAL COUNT FOR DOUBLES
            // }
            const totals = this.countRegexArr(checkForDoubleXmas);
            const arrNums = Object.values(totals);
            function sum(a,b) { return a+b; }
            let total = 0;
            arrNums.forEach(i => total += i);
            this.count += total;
        }
        // this.count += c;
    }
    doubleLoop(el, aux) {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < 1; y++) {
                let letters = el[x][y];
                if(!aux[x]) {
                    aux[x] = [];
                }
                aux[x] += letters;
            }
        }
    }
    getWidthHeight() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
        return this;
    }
    getCount() {
        console.log("Count:\t", this.count);
        // 2468 too low...
        // 2476 too low...
        // 2478 too low...
        // 2483 wrong answer
        // 2514 - correct!
    }
    countRegexArr(regArr) {
        let obj = {};
        for (let i = 0; i < regArr.length; i++) {
            const element = regArr[i];
            if (!obj[element]) {
                obj[element] = 0;
            }
            if (element === "SAMXMASAMXMASAMX") {
                obj[element] += 5
            } else if (element === "XMASAMXMASAMX" || element === "SAMXMASAMXMAS") {
                obj[element] += 4
            } else if (element === "XMASAMXMAS" || element === "SAMXMASAMX") {
                obj[element] += 3
            } else if (element === "SAMXMAS" || element === "XMASAMX") {
                obj[element] += 2
            } else if (element === "XMAS" || element === "SAMX") {
                obj[element] += 1
            }
        }
        return obj;
    }
}
const crossword = new CrossWord(splitInput, width, height);

crossword
    .processHorizontal()
    .processVertical()
    .getWidthHeight()
    .getCount();


// hori - 5
// vert - 3+
// diag - 1 (on i=0)

module.exports = { CrossWord, splitInput };