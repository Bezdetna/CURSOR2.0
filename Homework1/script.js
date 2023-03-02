//let - значення змінної може змінитися.
//const - створює посилання на значення, яке змінити не можна.
let shoes = 15.678;
let clothes = 123.965;
let product = 90.2345;

//console.log() - method outputs a message to the web console.
console.log(shoes, clothes, product);

//Math.max() -  returns the highest value in a list of arguments.
let max = Math.max(shoes, clothes, product);
console.log("Mаксимальна сума " +max);

//Math.min() - returns the lowest value in a list of arguments.
let min = Math.min(shoes, clothes, product)
console.log("Mінімальна сума " + min);

const amount = shoes + clothes + product
console.log("Сума " + amount)

/*parseInt - перетворює свій перший аргумент на рядок, розбирає цей рядок, а потім повертає ціле число або NaN
console.log(parseInt(shoes))
console.log(parseInt(clothes))
console.log(parseInt(product))
const sum = parseInt(shoes) + parseInt(clothes) + parseInt(product);
console.log(sum)*/

//Math.floor() - округляє число до найменшого цілого.
//let roundToLower = Math.floor(amount)
//console.log(roundToLower)

let roundToLowerShoes = Math.floor(shoes);
let roundToLowerClothes = Math.floor(clothes);
let roundToLowerProduct = Math.floor(product);

let  roundToLowerSum = roundToLowerShoes + roundToLowerClothes + roundToLowerProduct;
console.log( 'Округлення до найменшого ' + roundToLowerSum)

//Math.round - 	Поверне x, округлене до найближчого цілого числа.
let x = Math.round(roundToLowerSum / 100) * 100;
console.log('Округлення до сотен ' + x)

//Boolean - object represents a truth value: true or false.
let z = (roundToLowerSum % 2)
let parne = z == 0
let text = parne ? "Парне" : "Не парне";
console.log("Парним чи непарним числом? " + text)

//
let remainder = 500 - amount
console.log('Сумa решти ' + remainder)

//toFixed -  метод об'єкта Number який повертає рядок з числом з рівно digits цифр після десяткової крапки.
let value = amount / 3
console.log('Середнє значення ' + value.toFixed(2));

/*----------------------------------------------------------------------------------------------------*/

const sale = Math.floor((Math.random() * 100) + 1);
console.log('Знижка ' + sale + '%');

const num = amount - (amount * (sale/100))
console.log('Сума до оплати зі знижкою ' + num.toFixed(2));

const netProfit = (amount / 2) - (amount / sale)
console.log('Чистий прибуток ' + netProfit .toFixed(0))

console.log(`Mаксимальна сума ${ max }, Mінімальна сума ${ min }, Сума ${ amount }, Округлення до найменшого ${ roundToLowerSum }, Округлення до сотен ${ x }, Парним чи непарним числом? ${ text }, Сумa решти ${ remainder }, Середнє значення ${value.toFixed(2)}`)