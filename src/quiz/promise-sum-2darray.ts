const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sum1DArray(arr: number[]): Promise<number> {
    return new Promise(
        (resolve, reject) => {
            if(arr.length === 0) {
                reject('Cannot sum an empty array');
            }
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            resolve(sum);
        }
    );
}

const rowPromises = [];
for (let i = 0; i < array2D_1.length; i++) {
    rowPromises.push(sum1DArray(array2D_1[i]));
}
Promise.all(rowPromises).then(sums => {
    let sum = 0;
    sums.forEach(s => sum += s)
    console.log('sum:', sum)
}).catch(e => console.log(e));