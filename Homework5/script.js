1
export const getRandomArray = ((length, min, max) =>{
    const x = []
    for( let i = 0; i < length; i++){
        x.push(Math.floor(Math.random() * max) + min)
    }
    return x
})
const result = getRandomArray(10, 1, 100)


3
function getAverage(...numbers) {
    const filterNum = numbers.filter(number => number % 1 == 0)
    const result = filterNum.reduce((total, filterNum) => total + filterNum, 0) / filterNum.length;
    return result
}


4
function getMedian(...numbers){
    const filterNum = numbers.filter(number => number % 1 == 0)
    const sortNumbers = filterNum.sort((a, b) => a - b)
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

5
function filterEvenNumbers(...numbers){
    return numbers.filter(numbers => numbers % 2 !== 0)
}

6
function countPositiveNumbers(...numbers){
    const res = numbers.filter((numbers => numbers > 0));
    return res.length;
}
const res = countPositiveNumbers(-3, 6, -4, 1, 6, -2)
7
function getDividedByFive(...numbers){
    return numbers.filter(numbers => numbers % 5 === 0)
}


