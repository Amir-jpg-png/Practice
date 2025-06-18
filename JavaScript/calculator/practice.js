let array = [1, 2, 3, 4, 5];

function main() {
    console.log(sumArray(array));
    console.log(findMax(array));
}

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function findMax(array) {
    let tmp = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array [i] > tmp) {
            tmp = array[i];
        }
    }
    return tmp;
}

function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
}
}

main();
