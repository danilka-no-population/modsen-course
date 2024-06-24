const bubbleSort = (arr) => {
    if(arr.length === 0){
        return 'Массив пустой!'
    }
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = bubbleSort(arr);
console.log(sortedArr); // [11, 12, 22, 25, 34, 64, 90]

let arr1 = [];
let sortedArr1 = bubbleSort(arr1);
console.log(sortedArr1); // Массив пустой!