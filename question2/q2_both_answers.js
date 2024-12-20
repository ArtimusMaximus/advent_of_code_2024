const fs = require('fs');

// const inp = "testInput.txt";
const inp = "trueInput.txt";

let input = fs.readFileSync(`${inp}`, "utf8", (err, data) => {
        if (err) console.error(err);
        else return data;
});

const arrays = () => {
        return input
                .split("\n")
                .filter(c => c !== "" && c !== " ")
                .map((c) => {
                        const ch = c
                                    .split(" ")
                                    .map(a => parseInt(a))
                        return ch;
                });
}

let safetyChecks = { safe: 0, unsafe: 0 };

function check(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        const moduleMadeSafe = moduleSafe(arr[i]);
        if (moduleMadeSafe) {
            safetyChecks.safe++;
        }  else {
            safetyChecks.unsafe++;
        }
    }
    const total = safetyChecks.safe + safetyChecks.unsafe;
    console.log("total\t", total);
    console.log("safetyChecks.safe \t", safetyChecks.safe)
    console.log("safetyChecks.unsafe \t", safetyChecks.unsafe)
}

check(arrays());

function checkIndividualArr(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        const currEl = arr[j];
        const nextEl = arr[j+1];
        const diff = Math.abs(currEl - nextEl);
        if (diff < 1 || diff > 3 || !checkAllAscDesc(arr)) {
            return false;
        }
    }
    return true;
}
function checkAllAscDesc(arr) {
    function sortAsc(a,b) { return a-b; }
    function sortDesc(a,b) { return b-a; }
    const stringyArr = JSON.stringify(arr);
    const sortedAsc = JSON.stringify(arr.toSorted(sortAsc)) === stringyArr;
    const sortedDesc = JSON.stringify(arr.toSorted(sortDesc)) === stringyArr;
    return sortedAsc || sortedDesc;
}

function moduleSafe(arr) {
    for (let i = 0; i < arr.length; i++) {
        const origArr = arr.slice(0);
        origArr.splice(i, 1);
        if (checkIndividualArr(origArr)) {
            return true;
        }
    }
    return false;
}



