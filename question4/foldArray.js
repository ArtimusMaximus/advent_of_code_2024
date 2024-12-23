

function foldArrayTopRightToBottomLeft(arr) {
	let rowsCols = {};
	let rows = arr.length;
	let cols = arr[0].length;
	for (let x = 0; x < rows; x++) {
		for (let y = 0; y < cols; y++) {
		   	let fold = arr[y][x];
		   	if (!rowsCols[x]) {
				rowsCols[x] = [];
		    }
			if (fold !== undefined) {
				rowsCols[x].push(fold);
		    }
		}
	}
	return Object.values(rowsCols);
}

function foldArrayTopLeftToBottomRight(arr) {
	let rowsCols = {};
	let rows = arr.length;
	let cols = arr[0].length;
	for (let x = rows; x >= 0; x--) {
		for (let y = 0; y < cols; y++) {
		   	let fold = arr[y][x];
		   	if (!rowsCols[x]) {
				rowsCols[x] = [];
		    }
			if (fold !== undefined) {
				rowsCols[x].push(fold);
		    }
			//console.log(fold);
		}
	}
	return Object.values(rowsCols);
}

function alignVertical(arr) {
	let rowsCols = {};
	let rows = arr.length;
	let cols = arr[0].length;
	let start = 0;
	for (let x = 0; x < rows; x++) {
		for (let y = 0; y < cols; y++) {
			let verticalAlign = arr[x][y+start];
		   	if (!rowsCols[x]) {
				rowsCols[x] = [];
		    	}
		    	if (verticalAlign !== undefined) {
				rowsCols[x].push(verticalAlign);
		    	}
		}
		start++;
	}
	return Object.values(rowsCols);
}

let arrs = [
	[2,3,4,5,1],
	[1,2,3,4,5],
	[5,1,2,3,4],
	[4,5,1,2,3],
	[3,4,5,1,2]
];

function readEntireArrs(arr) {
	console.log("OrigArr\t", arr);
	const rows = arr.length;
	const cols = arr[0].length - 1;
	let dynamicCols = 0;
	let start = 0;
	let rowsCols = {};
	for (let x = 0; x < rows; x++) {
		console.log(arr[x][0])
		for (let y = cols; y > 0; y--) {
			const element1 = arr[x][y+start];
			if (!rowsCols[x]) {
				rowsCols[x] = [];
		    }
			if (element1 !== undefined) {
				rowsCols[x].push(element1);
			}
			if (dynamicCols === 5) {
				dynamicCols--;
			} else {
				dynamicCols++;
			}
		}
		start++;
	}
	const arrs = Object.values(rowsCols);
	// console.log('arrs\t', arrs);
	return arrs;
}
const testArr = readEntireArrs(arrs);




const arrs2 = foldArrayTopRightToBottomLeft(arrs);
// console.log("InitialArr\t", arrs);
// console.log("InitialArr2\t", arrs2);

// create vertical alignments of diagonal nums (for horizontal
const setsOfVertical  = alignVertical(arrs);
const setsOfVertical2 = alignVertical(arrs2);

//console.log(setsOfVertical);
//console.log(setsOfVertical2);

const foldedHori  = foldArrayTopRightToBottomLeft(setsOfVertical);
const foldedHori2 = foldArrayTopRightToBottomLeft(setsOfVertical2);

//console.log(foldedHori);  //
//console.log(foldedHori2);

let revArrs = [];
	arrs.forEach((arr) => {
		const reverse = arr.reverse();
		revArrs.push([...reverse]);
	});



	// const revGrid = foldArrayTopLeftToBottomRight(arrs);
	// const revGrid2 = foldArrayTopLeftToBottomRight(revArrs);
const revGrid = foldArrayTopRightToBottomLeft(arrs);
const revGrid2 = foldArrayTopRightToBottomLeft(revArrs);

// const revArr2 = foldArrayTopLeftToBottomRight(arrs2);
// console.log("InitRevArr\t", revArr);
// console.log("revGrid\t", revGrid);
// console.log("revGrid2\t", revGrid2);


// const revArrVertical = alignVertical(revArr);
// const revArrVertical2 = alignVertical(revArr2);

// const revArrFoldedHori  = foldArrayTopRightToBottomLeft(revArrVertical);
// const revArrFoldedHori2 = foldArrayTopRightToBottomLeft(revArrVertical2);

//console.log(revArrFoldedHori);
//console.log(revArrFoldedHori2);


module.exports = {
	foldArrayTopRightToBottomLeft,
	foldArrayTopLeftToBottomRight,
	alignVertical
};
