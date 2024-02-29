const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumRow(arr, row) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let j = 0; j < arr[row].length; j++) {
                    sum += arr[row][j];
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

rowSums = [];

for (let n = 0; n < array2D.length; n++) {
    rowSums.push(sumRow(array2D, n));
}

Promise.all(rowSums)
    .then((sums) => {
        let sum = 0;
        sums.forEach((x) => {
            sum += x;
        })
        console.log(sum)
    })
    .catch((err) => {console.log(err)});