import { uppercase }  from '../Homework3/script.js';
console.log(uppercase('alisa'));
import {studentPairs, students, girls, boys} from '../Homework4/script.js';
console.log(studentPairs(boys, girls));
import { getRandomArray }  from '../Homework5/script.js';
console.log(getRandomArray(10, 1, 100));
import { getSubjects, student} from '../Homework6/script.js';
console.log(getSubjects(student));
import {getMiddleTaxes, ukraine} from '../Homework7/script.js';
console.log(getMiddleTaxes.call(ukraine))
import {Students, studentInfo} from '../Homework8/script.js';
console.log(`Середня оцінка: ${studentInfo.getAverageMark()}.`);
import {getRandomColorRGB, generateBlocks } from '../Homework9/script.js';
generateBlocks(25)
import {getRandomChinese} from '../Homework11/script.js';
getRandomChinese(4).then(res => console.log(res))
import '../Homework10/style/style.css'
