let Students = [
    {name : "Adhi", gender : "male"},
    {name : "Ahamed", gender : "male"},
    {name : "Dharshan", gender : "male"},
    {name : "Indhumathi" , gender : "female"},
    {name : "Sridevi" , gender : "female"},
    {name : "Abi", gender : "female"},
    {name : "Vijay", gender : "male"},
    {name : "Rani" , gender : "female"}
];

let femaleStudents = Students.filter( (student) =>student.gender.toLowerCase()==="female").map( (femalestudent) => femalestudent.name);
console.log(femaleStudents);
let studentnamestartwithA = Students.filter( (student) =>student.name[0].toUpperCase()==='A').map( (student) => student.name);
console.log(studentnamestartwithA);
let countofmaleStudents = Students.filter( (student) => student.gender.toLowerCase()==="male").length;
console.log(countofmaleStudents);