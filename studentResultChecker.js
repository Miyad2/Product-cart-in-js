const students = [
 {name:"Rahim", marks:80},
 {name:"Karim", marks:35},
 {name:"Miyad", marks:90},
 {name:"Sakib", marks:45}
];


// Finding the passed students
var passStudent = students.filter(function(value){
return value.marks>40
})
console.log(passStudent)


// Showing 1 person result ===//// Find() method only show the first elements
var IndevidualResult = students.find((value)=>{
    return value.marks === 45
})
console.log(IndevidualResult)


var failStudent = students.filter((value)=>{
    return value.marks<90
})
console.log(failStudent)


//  Showing the name of passed students
var studentsName = students.filter((value)=>{
    return value.marks > 40
})
var PassStudentsName = studentsName.map(value=>{
    return value.name
})
console.log(PassStudentsName)



