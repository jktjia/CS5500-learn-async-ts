const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negRow(arr, row) {
    return new Promise((resolve, reject) => {
        console.log('Neg rows called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let hasNeg = false;
                for (let j = 0; j < arr[row].length; j++) {
                    hasNeg = hasNeg | (arr[row][j] < 0);
                }
                console.log('resolving ... ');
                resolve(hasNeg);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from neg rows');
    });
}

function logNegRows(arr) {
    rowHaveNeg = [];
    for (let n = 0; n < array2D.length; n++) {
        rowHaveNeg.push(negRow(array2D, n));
    }

    return Promise.all(rowHaveNeg)
        .then((bools) => {
            
        });
}

logNegRows(array2D);