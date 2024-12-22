

function foldArray(arr) {
	let rowsCols = {};
	let rows = arr.length;
	let cols = arr[0].length;
	let start = 0;
	for (let x = 0; x < rows; x++) {
		for (let y = 0; y < cols; y++) {
		   	let foldArray = arr[y][x];
		   	if (!rowsCols[x]) {
				rowsCols[x] = [];
		    	}
		    	rowsCols[x].push(foldArray);  
		}
	}
	return Object.values(rowsCols);	
}

function alignHorizontal(arr) {
	let rowsCols = {};
	let rows = arr.length;
	let cols = arr[0].length;
	let start = 0;
	for (let x = 0; x < rows; x++) {
		for (let y = 0; y < cols; y++) {
			let el = arr[x][y+start];
		   	if (!rowsCols[x]) {
				rowsCols[x] = [];
		    	}
		    	if (arrs[y+start] !== undefined) {
				rowsCols[x].push(el);  
		    	}
		}
		start++;
	}
	return Object.values(rowsCols);	
}



module.exports = { foldArray, alignHorizontal };

let arrs = [
	[2,3,4,5,1], 
	[1,2,3,4,5], 
	[5,1,2,3,4], 
	[4,5,1,2,3], 
	[3,4,5,1,2]
];


const arrs2 = foldArray(arrs);
console.log("InitialArr\t", arrs);
//console.log(arrs2);

const setsOfVertical  = alignHorizontal(arrs);
const setsOfVertical2 = alignHorizontal(arrs2);

//console.log(setsOfVertical);
//console.log(setsOfVertical2);

const foldedHori  = foldArray(setsOfVertical);
const foldedHori2 = foldArray(setsOfVertical2);

console.log(foldedHori);  // 
console.log(foldedHori2);


