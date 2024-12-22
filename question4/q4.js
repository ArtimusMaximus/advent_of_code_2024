const fs = require("fs");

const input = "testInput.txt";
// const input = "trueInput.txt";

const testInput = fs.readFileSync(`${input}`, "utf8", (err, data) => {
	if (err) console.error(err);
	else return data;
});

let splitInput = testInput.split("\n");
//console.log(splitInput);

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
        const regex = /samxmas|xmasamx|xmas|samx/gi
        const count = str.match(regex)?.length || 0;
        const checkForDoubleXmas = str.match(regex);
        if (count !== 0) {
            if (checkForDoubleXmas.includes("SAMXMAS") || checkForDoubleXmas.includes("XMASAMX")) {
                this.count += 1; // ADDITIONAL COUNT FOR DOUBLES
            }
        }
        this.count += count;
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
    }
    getCount() {
        console.log("Count:\t", this.count);
    }
}
const crossword = new CrossWord(splitInput, width, height);

crossword
    .processHorizontal()
    .processVertical()
    .processDiagonal()
    .getCount();


// hori - 5
// vert - 3+
// diag - 1 (on i=0)