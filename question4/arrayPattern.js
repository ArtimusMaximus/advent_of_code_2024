

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

function leftDiagonal(arr) {
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
    return aux;
}
let revArr = [];
let copy = arrs.map((innerArray) => [...innerArray]);
copy.forEach((arr) => {
    revArr.push(arr.reverse());
});

console.log("origArr\t", arrs);
console.log("revArr\t", revArr);

let rightResult = leftDiagonal(revArr);
let leftResult = leftDiagonal(arrs);

console.log("rightResult\t", rightResult);
console.log("leftResult\t", leftResult);

module.exports = {

}
// todos:
//      make a deep copy reverse function
//      check functions are ready to ship
//      consider making this a class that extends crossword