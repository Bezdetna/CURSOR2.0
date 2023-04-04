class Students {
    constructor(course, university, fullName,){
        this.course = course
        this.university = university
        this.fullName = fullName
        this._marks = [5, 4, 4, 5]
        this.dismissed = false;
    }
    getInfo(){
        return `Студент ${this.course}го курсу ${this.university} м. Одеса, ${this.fullName}`
    }
    get marks() {
        if(this.dismissed){
            return null
        } else {
            return this._marks
        }
    }
    
    set marks(mark) {
        if(this.dismissed){
            return null
        } else {
            this._marks.push(mark)
        }
    } 
    getAverageMark(){
        if(this.dismissed){
            return null
        } else {
            const sum = this._marks.reduce((total, mark) => total + mark, 0);
            const res = sum / this._marks.length;
            return res;}
    };
    dismiss(){
        this.dismissed = true;
    }
    recover(){
        this.dismissed = false;
    }
}

let student = new Students( 1, 'Вищої Школи Психотерапії', 'Остап Родоманський Бендер', );

console.log(student.getInfo());
console.log(student.marks); 
student.marks = 5;
console.log(student.marks); 
console.log(`Середня оцінка: ${student.getAverageMark()}.`);
student.dismiss()
console.log(`Якщо студент виключен: ${student.getAverageMark()}`);
student.recover()
console.log(`Якщо студент поновлен: ${student.marks}`);
/*---------------------------------Advanced-------------------------------------------------------------------------------*/
class BudgetStudent extends Students {
    constructor(course, university, fullName) {
        super(course, university, fullName);
        this.sum = 1400;
    }

    getScholarship() {
        if (!this.dismissed && this.marks < 4.0) {
            return `Ви виключені`;
        } else {
            return `Ви отримали ${this.sum} грн. стипендії`;
        }
    }
}

const budget = new BudgetStudent();
console.log(budget.getScholarship());