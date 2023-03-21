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
2
function getMedian(...numbers){
    return numbers.reduce((total, numbers) => total + numbers, 0) / numbers.length;
}
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
3
function getAverage(...numbers) {
    return numbers.reduce((total, numbers) => total + numbers, 0) / numbers.length;
}
console.log(getAverage(2, 9, 9, 8, 6, 5, 3, 9, 1, 7, 7))

5
function filterEvenNumbers(...numbers){
    return numbers.filter(numbers => numbers % 2 !== 0)
}
console.log(filterEvenNumbers (2, 5, 3, 1, 4, 8, 4))

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


