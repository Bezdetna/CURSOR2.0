1
const getRandomArray = ((length, min, max) =>{
    const x = []
    for( let i = 0; i < length; i++){
        x.push(Math.floor(Math.random() * max) + min)
    }
    return x
})
const result = getRandomArray(10, 1, 100)
console.log(result)

3
function getAverage(...numbers) {
    const filterNum = numbers.filter(number => number % 1 == 0)
    const result = filterNum.reduce((total, filterNum) => total + filterNum, 0) / filterNum.length;
    return result
}
console.log( getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 3.5, 23, 4.5, 2, 56, 3, 2))

4
function getMedian(...numbers){
    const sortNumbers = numbers.sort((a, b) => a - b)
    const isInteger = sortNumbers.length % 2 === 0
    const y = []
    if(!isInteger){
        const x = (sortNumbers.length - 1) / 2
        y.push(sortNumbers[x])
    }
    if(isInteger){
        var midIndex1 = Math.floor((sortNumbers.length - 1) / 2);
        var midIndex2 = Math.ceil((sortNumbers.length - 1) / 2);
        var median = (sortNumbers[midIndex1] + sortNumbers[midIndex2]) / 2;
        y.push(median)
    }
    return y
}
console.log(getMedian(1, 2, 3, 4))

5
function filterEvenNumbers(...numbers){
    return numbers.filter(numbers => numbers % 2 !== 0)
}
console.log("filterEvenNumbers  " + filterEvenNumbers (2, 5, 3, 1, 4, 8, 4))

6
function countPositiveNumbers(...numbers){
    const res = numbers.filter((numbers => numbers > 0));
    return res.length;
}
const res = countPositiveNumbers(-3, 6, -4, 1, 6, -2)
console.log(res)
7
function getDividedByFive(...numbers){
    return numbers.filter(numbers => numbers % 5 === 0)
}
console.log(getDividedByFive(6, 2, 55, 11, 5, 2, 55, 77, 57, 87, 10, 2, 56, 3, 2))


