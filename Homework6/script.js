export const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];
/* --------------------------------------------------------------------------------------------------*/
export const student = students[0]
export function getSubjects (student) {
    const res = []
    Object.keys(student.subjects).forEach(function(key,index) {
        const upperCase = (key[0].toUpperCase() + key.slice(1).toLowerCase()).replace("_", " ")
        res.push(upperCase)
    });
    return res
}

// /*----------------------------------------------------------------------------------------------------*/
// function getSubjects (student) {
//     const res = [];
//     const objectKey = Object.keys(student.subjects)
//     for(let i = 0; i < objectKey.length; i++){
//         const subjectKey = objectKey[i]
//         const upperCase = (subjectKey[0].toUpperCase() + subjectKey.slice(1).toLowerCase()).replace("_", " ")
//         res.push(upperCase)
//     }
//     return res
// }
// console.log(getSubjects(student))
// /*----------------------------------------------------------------------------------------------------------- */

const getAverageMark = (student) =>  {
    const studentMarks = Object.values(student.subjects).flat();
    const sum = studentMarks.reduce((total, mark) => total + mark, 0);
    const averageMark = (sum / studentMarks.length).toFixed(2)
    return averageMark;
}

// /*---------------------------------------------------------------------------------------------------------------*/
const getStudentInfo = (student) =>{
    let studentInfo = {}
    studentInfo['course'] = student.course
    studentInfo['name']= student.name
    studentInfo['averageMark'] = getAverageMark(student)
    return studentInfo
}
/*------------------------------------------------------------------------------------------------------------------*/

function getStudentsNames(students){
    let i = 0;
    let res = []
    while( i < students.length){
        const name = Object.values(students[i].name).join('');
        i++
        res.push(name)
    }return res.sort()

}

/*------------------------------------------------------------------------------------------------------------------*/
const getBestStudent = (students) =>  {
    let bestMark = []
    let bestStudent = '';
    for(let i = 0; i < students.length; i++){
        const studentMarks = Object.values(students[i].subjects).flat();
        const sum = studentMarks.reduce((total, mark) => total + mark, 0);
            if (sum > bestMark){
                bestMark = sum;
                bestStudent = students[i].name
            }
}return bestStudent
}

/*------------------------------------------------------------------------------------------------------------------*/
const test = 'тест'
function calculateWordLetters(test){
    const letters = {};
  for (let i = 0; i < test.length; i++) {
    const letter = test[i];
    if (letters[letter]) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }
  
  return letters;
}



