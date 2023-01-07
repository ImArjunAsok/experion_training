// const languages = ['C', 'C++', 'Java', 'Python'];
// languages.forEach(lang => {
//     console.log(lang);
// });


// const languages = ['C', 'C++', 'Java', 'Python'];    //each elements displayed with index number
// languages.forEach((item, index) => {
//     console.log(index, item);
// });

// const person = {
//     name: 'John Doe',            //object accessing
//     age: 20
// };
// console.log(person);
// console.log(person.name);


// const person = {
//   name: 'John Doe',            //object updating
//   age: 20
//  };

//  person.name = 'New Name';

//  const person = {
//     name: 'John Doe',            //adding new data to object
//     age: 20
//    };
  
//    person.name = 'New Name';
//    person.email = 'me@example.com';
//    console.log (person);

// const person = {
//      name: 'John Doe',            //adding new data to object
//      age: 20,
//      experience:[
//         {
//             company: 'Company ABC',
//             years: 2
//         },
//         {
//             company: 'Company XYZ',
//             years: 3
//         }
//      ]
//     };
//     console.log(person.experience);
//     console.log(person.experience[0]);
//     console.log(person.experience[0].company);
//     person.experience.forEach(exp=>console.log(exp.company));

// const rows = 3;
// const cols = 3;
// const m = new Array(rows);

// const m1 = [
//     [1, 2],
//     [3, 4]
// ];
// console.log(m1);

// setTimeout(()=> {           //set time out 
//     console.log('Code Worked!!!!');
// }, 10000);

// setInterval(()=> {                // periodically execute
//     console.log('Code Worked!!!!');
// }, 3000);

// setInterval(()=> {                // OUTSIDE BRACKET EXECUTES FIRST
//     console.log('Code Worked!!!!');
// }, 3000);
// console.log('COMPLETED');

// const student = {
//     name: 'Student 1',
//     mark1: 40,
//     mark2: 50,
//     total: function () {
//         const extraMark = 5;
//         console.log(this.mark1 + this.mark2 + extraMark);
//     }
// };
// student.total();

// const student = {
//     name: 'Student 1',
//     mark1: 40,
//     mark2: 50,
// };
// // const copy = Object.assign({}, student);
// const copy = Object.assign({age: 15}, student);
// copy.name = 'New Name'; 
// console.log(student);
// console.log(copy);

// const student = {
//     name: 'Student 1',
    
// };

// const marks = {
//     mark1: 40,
//     mark2: 50
// };

// const copy = Object.assign( student, marks, {age: 19});
// console.log(copy);

// const student = {
//     fullName: 'Student 1',        //destructuring an object
//     mark1: 40,
//     mark2: 50
// };
// const {fullName, mark2} = student;
// console.log(fullName);
// console.log(mark2);

const student = {
    fullName: 'Student 1',        //destructuring an object
    mark1: 40,
    mark2: 50
};

const keys = Object.keys(student);
keys.forEach(keys=>{
    console.log(student[keys]);
});



















































































































































































































































































































































































































































































































