//Object creation
const student1 = {
  name: 'Charan',
  age: 21,
  grade: 'A'
}
//adding properties using dot notation
const student2 = {};
student2.name = 'Akhil'
student2.age = 21
student2.grade = 'S'
//adding properties using bracket notation
const student3 = {};
student3['name'] = 'Hari'
student3['age'] = 22
student3['grade'] = 'B'
//saving object propertie in variable
const age = student1.age;
console.log(age)
//savng data using destructuring
const { grade } = student1;
console.log(grade);

console.log(student1)
console.log(student2)
console.log(student3)
