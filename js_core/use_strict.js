'use strict'

const checkValue = (arr, value) => {
    return arr.includes(value)
}

console.log(checkValue([1, 2, 3, 4, 5, 6, 7], 1));
console.log(checkValue([885, 632, 987], 6742));