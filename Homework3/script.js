// Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number){
    let getMaxDigit = Math.max(...number.toString().split(""))
    console.log(`Найбільша цифра у числі ${number}: ${getMaxDigit}`)
}
getMaxDigit(74574549)

// Функцію, яка визначає ступінь числа.
function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
console.log(pow(2, 3))

// Функція, яка форматує ім'я, роблячи першу букву великою.
function uppercase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  }
  console.log(uppercase("alisa"))


// Функція, яка повертає випадкове ціле число
function getRandom(N, M){
    if(N % 1 === 0 && M % 1 === 0){
        return Math.floor(Math.random() * (M - N + 1) + N)
    }else{
        alert("Ввели не цілі числа")
    }
    
}
console.log(getRandom(10, 20))


//Функція, яка рахує скільки разів певна буква повторюється в слові.
let sum = 0
function countLetter(word,letter){
        for(let i = 0; i < word.length; i++){
            if(word[i] === letter){
                sum++
            }
        }
    }
countLetter("Розгніваний", "н")
console.log(sum)

//Функція, яка перевіряє, чи є слово паліндромом.
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}
let wordPalindrom = isPalindrome("ротатор")
console.log(wordPalindrom)
