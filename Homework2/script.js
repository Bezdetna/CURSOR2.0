let firstNumber = prompt("Choose a number N", '')

while(true){
    if (firstNumber % 1 === 0 && firstNumber > 0){
        console.log(firstNumber)
        break
    }
    firstNumber = prompt("Choose an integer number N biggest than 0", '')
}

let secondNumber = parseFloat(prompt("Choose a number M", ''))
while(true){
    if(secondNumber > firstNumber){
        console.log(secondNumber)
        break
    }
    secondNumber = prompt("Choose an integer number M biggest than N", '')
}

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



