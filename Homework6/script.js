const students = [{
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


// function getSubjects (student) {
//     const res = []
//     Object.keys(student.subjects).forEach(function(key,index) {
//         const upperCase = (key[0].toUpperCase() + key.slice(1).toLowerCase()).replace("_", " ")
//         res.push(upperCase)
//     });
//     return res
// }
// console.log(getSubjects(student))
///////////////////////////////////////////////////////////////////
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

console.log(students)
const student = students[0]

function getAverageMark(student){

    const entr = Object.entries(student.subjects)
    entr.map(([index, item]) => console.log(index, item))
    return entr
}
getAverageMark(student)
