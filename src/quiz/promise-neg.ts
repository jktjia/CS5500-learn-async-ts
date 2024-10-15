const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function findNegative(arr: number[]) : Promise<boolean> {
    return new Promise(
        (resolve) => {
            let hasNeg = false;
            for (let i = 0; i < arr.length; i++) {
                hasNeg = hasNeg || (arr[i] < 0)
            }
            resolve(hasNeg);
        }
    );
}

const rows = [];
for (let i = 0; i < array2D_3.length; i++) {
    rows.push(findNegative(array2D_3[i]));
}
Promise.all(rows).then(rows => console.log(rows.some(r => r))).catch(e => console.log(e));