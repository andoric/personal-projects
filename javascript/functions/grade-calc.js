let gradeCalc = function(studentScore, totalScore){
    score = studentScore / totalScore*100
    if (score >=90 ){
        letterGrade = 'A'
    }else if (score >= 80){
        letterGrade = 'B'
    }else if (score >= 70){
        letterGrade = 'C'
    }else if (score >= 60){
        letterGrade = 'D'
    }else {
        letterGrade = 'F'
    }

    return `${studentScore}/${totalScore}, Your grade is ${letterGrade} (${score}%)`
}
let grade = gradeCalc(12,20)
console.log(grade)