/*function getMaxDigit(number){
    const maxValue = Math.max(...number.toString())
    console.log(maxValue)
  }
    const number = prompt('Ведіть число')
    getMaxDigit(number)*/


const number = prompt('Ведіть число')
let num = 0

for(let i = 0; i < number.length; i++){
    if( num > i){
        num = i
    }
        console.log( number[i])
}