const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function sumRow(arr: number[]): Promise<number> {
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

async function calculateSum(numArr: number[][]) {
    if (numArr.length === 0) {
        throw 'cannot calculate sum of an empty array'
    }
    const rowPromises = [];
    for (let i = 0; i < array2D_1.length; i++) {
        rowPromises.push(sumRow(array2D_1[i]));
    }
    try {
        const rowSums = await Promise.all(rowPromises);
        let sum = 0;
        rowSums.forEach(s => sum += s)
        console.log('sum:', sum)
    } catch (err) {
        console.log(err)
    }
}


calculateSum(array2D_1)