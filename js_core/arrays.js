const firstHalfSum = (arr) => {
    if(arr.length === 0){
        return 'В массиве нет элементов!'
    }else{
        let sum = 0
        for(let i = 0; i < Math.floor(arr.length / 2); i++){
            sum += arr[i]
        }
        return sum
    }
}

console.log(firstHalfSum([1, 2, 3, 4, 5, 6])) // 6
console.log(firstHalfSum([1, 2, 3, 4, 5, 6, 7])) // 6
console.log(firstHalfSum([1, 2, 3, 4, 5, 6, 7, 8])) // 10
console.log(firstHalfSum([])) // В массиве нет элементов!

// Было принято решение: если в массиве нечётное кол-во элементов(например 7), то тогда
// средний элемент(как число 4 во втором примере) не будет считаться, так как сложно понять
// к какой половине оно относится - к первой, или ко второй :)