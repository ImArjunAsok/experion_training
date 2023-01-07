// // console.log('Hello World');
// // console.log('Hello', 'World');
// console.clear();
// var i=5; console.log(i);
// var firstName = 'John'; var lastName = 'Doe'; console.log(firstName,lastName);
// var firstName = "John"; console.log(typeof firstName);
// var data="This is a string"; console.log(data[5]);
// var data="This is a string"; console.log(data[data.length-1]);
// var data='This is a string'; data=data.toUpperCase(); console.log(data);
// var message='   JS for Web   '; console.log(message.trim()); console.log(message);
// var message='JS for Web';
// console.log(message.split(' '));
// var message = "JS For Web"; var res = message.replace(' ', '_'); console.log (res);

//  var message = "  JS For Web  "; 
//  var res = message
//         .toUpperCase()
//         .trim()
//         .replaceAll(' ', '_');
// console.log(res);

// for(var i=0; i<3; i++){     'i' does not have scope like in c,cpp
//     console.log("Inside:", i);
// }
// console.log("Outside:", i);

// for(let i=0; i<3; i++) {
//     console.log("Inside:", i);   this will show error because now i won't be accessible for outside log
//     }
//     console.log("Outside:", i);

// const firstName = 'John';   const because the value is fixed & it should be initialised (no null values)
// const lastName = 'Doe';
// console.log(firstName, lastName);
const firstNumber = 10;
const secondnumber = 12;
const res1 = `${firstNumber} + ${secondnumber} = ${firstNumber+secondnumber}`
const res2 = firstNumber + ` + ` + secondnumber + ` = ` + (firstNumber+secondnumber);
console.log(res1);
console.log(res2);
