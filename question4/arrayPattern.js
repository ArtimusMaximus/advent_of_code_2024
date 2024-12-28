const { CrossWord } = require("./q4.js");

let arrs = [
	[2,3,4,5,1],
	[1,2,3,4,5],
	[5,1,2,3,4],
	[4,5,1,2,3],
	[3,4,5,1,2]
];
// PATTERN GOES [/]
const arrayPatternRight = [
    [arrs[0][0]],
    [arrs[0][1], arrs[1][0]],
    [arrs[0][2], arrs[1][1], arrs[2][0]],
    [arrs[0][3], arrs[1][2], arrs[2][1], arrs[3][0]],
    [arrs[0][4], arrs[1][3], arrs[2][2], arrs[3][1], arrs[4][0]],
    [arrs[1][4], arrs[2][3], arrs[3][2], arrs[4][1]],
    [arrs[2][4], arrs[3][3], arrs[4][2]],
    [arrs[3][4], arrs[4][3]],
    [arrs[4][4]],
];

//PATTERN GOES [\]
const arrayPatternLeft = [
    [arrs[4][0]],
    [arrs[3][0], arrs[4][1]],
    [arrs[2][0], arrs[3][1], arrs[4][2]],
    [arrs[1][0], arrs[2][1], arrs[3][2], arrs[4][3]],
    [arrs[0][0], arrs[1][1], arrs[2][2], arrs[3][3], arrs[4][4]],
    [arrs[0][1], arrs[1][2], arrs[2][3], arrs[3][4]],
    [arrs[0][2], arrs[1][3], arrs[2][4]],
    [arrs[0][3], arrs[1][4]],
    [arrs[0][4]]
];

class DiagonalHandler extends CrossWord {
    constructor(crossword) {
        super(crossword);
        // this.crossword = crossword;
        this.reverseArr = [];
        this.leftDiagonalArr = [];     // starts from top left e.g. [/]
        this.rightDiagonalArr = [];    // does [\] but by using a reverse array, so still: [/]
    }
    deepCopyForReverseArr() {
        let copy = this.crossword.map((innerArray) => [...innerArray]);
        copy.forEach((arr) => {
            this.reverseArr.push(arr.reverse());
        });
        return this;
    }
    leftDiagonal(reverse) {
        let arr;
        if (reverse) {
            arr = this.reverseArr;
        } else {
            arr = this.crossword;
            // arr = this.crossword.map(arr => arr.split(""));
        }
        let aux = [];
        let len = arr.length;
        for (let sum = 0; sum < 2 * len - 1; sum++) { // 9 iterations
            const diagonal = []; // we want 9 arrays
            for (let row = 0; row < len; row++) {
                const column = sum - row;
                if (column >= 0 && column < len) {
                    diagonal.push(arr[row][column]);
                }
            }
            aux.push(diagonal);
        }
        if (reverse) {
            this.rightDiagonalArr = aux.map(arr => arr.join(""));
        } else {
            this.leftDiagonalArr = aux.map(arr => arr.join(""));
        }
        return this;
    }
    getDiagonals() {
        console.log(`Left Diagonal: ${this.leftDiagonalArr}`);
        console.log(`Right Diagonal: ${this.rightDiagonalArr}`);
    }
    processDiagonals() {
        this.leftDiagonalArr.forEach((arr) => {
            if (arr.length >= 4) {
                this.regex(arr);
            }
        });
        this.rightDiagonalArr.forEach((arr) => {
            if (arr.length >= 4) {
                this.regex(arr);
            }
        });
        return this;
    }
}

// const diagHandler = new DiagonalHandler(splitInput);

// diagHandler
//     .deepCopyForReverseArr()
//     .leftDiagonal(false)
//     .leftDiagonal(true)
//     .processDiagonals()
    // .getDiagonals();
    // .processHorizontal()
    // .processVertical()
    // .getCount();

module.exports = DiagonalHandler;

// todos:
//      make a deep copy reverse function - check
//      check functions are ready to ship - check
//      consider making this a class that extends crossword - check