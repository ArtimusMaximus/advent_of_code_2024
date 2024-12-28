const DiagonalHandler = require("./arrayPattern");
const { splitInput } = require("./q4.js");


// const width = splitInput[0].length;
// const height = splitInput.length;

class Xmas extends DiagonalHandler {
    constructor(crossword) {
        super(crossword);
        this.width = this.crossword[0].length;
        this.height = this.crossword.length;
    }

    checkXmas() {
        //this.leftDiagonalArr
        //this.rightDiagonalArr
        for (let z = 0; z < this.width; z++) {
            const elementX = this.leftDiagonalArr[z];
            const elementY = this.rightDiagonalArr[z];
            if (elementX.length > 2 || elementY.length > 2) {
                console.log(elementX.indexOf("A"));
                console.log(elementY.indexOf("A"));
            }


        }
        return this;
    }

}

const xmas = new Xmas(splitInput);

// console.log('xmas.crossword\t', xmas.crossword)

xmas
    .deepCopyForReverseArr()
    .leftDiagonal(false)
    .leftDiagonal(true)
    .checkXmas()
    .getWidthHeight();
    // .getDiagonals();
