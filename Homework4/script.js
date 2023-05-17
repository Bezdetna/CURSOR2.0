export const students = ["Олександр", "Ігор", "Олена", "Іра","Олексій","Світлана",]
const themes = [
    "Диференційне рівняння", 
    "Теорія автоматів",
    "Алгоритми і структури даних"
];
const marks = [4, 5, 5, 3, 4, 5];

//Сортуємо на дівчинка /хлопчик
export let girls = []
export let boys = []
for(let i = 0; i < students.length; i++){
        let name = students[i]
            if(name.endsWith('а')){
                girls.push(name)
            }else{
                boys.push(name)
        }
    }

//Розділяємо на пари.
export const studentPairs =((student1, student2) => {
    const pairs = [];
    for (let i = 0; i < (boys.length, girls.length); i++) {
        pairs.push([boys[i] + " і " +girls[i]]);
    }return pairs
})


//Роспріділяємо теми по парах та ставимо кожному студенту оцінку.
const pairsStudentThemes = (( param1, param2) => {
    let pairsThemes = [];
    for(let i = 0; i < (param1.length, param2.length); i++){
        pairsThemes.push([param1[i] + ' , ' + param2[i]])
    }return pairsThemes
})


//Ставимо оцінки від 1 до 5, кожній парі студентів з назначеною темою
const sumRes = ((param) => {
    let result = []
    for( let i = 0; i < pairsThemes.length; i++){
        const randomNum = Math.floor(Math.random() * 5) + 1;
        result.push([pairsThemes[i] + ' , ' + randomNum])
    }return result
})


const pairs = studentPairs(girls, boys)
const pairsThemes = pairsStudentThemes(pairs, themes)
const studensMarks = pairsStudentThemes(students, marks)
const result = sumRes(pairsThemes)


