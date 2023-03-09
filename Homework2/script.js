const firstNumber = parseFloat(prompt("Choose a number N", ''))
let firstNumberInt = Number.isInteger(firstNumber)

while(!Number.isInteger(firstNumber)){
    firstNumber = parseFloat(prompt("Choose a integer number N", ''))
    firstNumberInt = Number.isInteger(firstNumber)
}
console.log(firstNumber)

const secondNumber = parseFloat(prompt("Choose a number M", ''))
let secondNumberInt = Number.isInteger(secondNumber)

while(!Number.isInteger(secondNumber)){
    secondNumber = parseFloat(prompt("Choose a integer number M", ''))
    secondNumberInt = Number.isInteger(secondNumber)
}
console.log(secondNumber)

const intNumberBol = confirm('Чи потрібно пропускати парні числа?')
let sum = 0

for(let i = firstNumber; i <= secondNumber; i++){
    if(intNumberBol == true){
        if(i % 2){
            sum += i 
        }
    }else{
        sum += i
    }
}
console.log(sum)



