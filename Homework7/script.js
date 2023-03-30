const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = {tax: 0.15,middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
    const number = this.tax * salary
    return number
};
console.log(getMyTaxes.call(ukraine, 20000));

function getMiddleTaxes(country){
    const number = this.tax * this.middleSalary
     return number
 }
 console.log(getMiddleTaxes.call(latvia))

function getTotalTaxes(country){
    const number = this.tax * this.middleSalary * this.vacancies
    return number
}
console.log(getTotalTaxes.call(litva))


function getMySalary(country){
    const salaryNumber = (Math.floor(Math.random() * 2000) + 1500);
    const taxesNumber = ukraine.tax * salaryNumber;
    const profitNumber = salaryNumber - taxesNumber;
    let newObj = {
        salary: salaryNumber,
        taxes: taxesNumber,
        profit: profitNumber,
    }
console.log(newObj)
}

getMySalary(ukraine)
let timerId = setInterval(() => getMySalary(ukraine), 2000);
setTimeout(() => {clearInterval(timerId)}, 10000)