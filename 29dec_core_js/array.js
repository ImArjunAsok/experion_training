// let numbers = [1, 2, 3, 'Four']; //array is able to keep different data types
// numbers[0] = 100;
// // numbers[10] = 100; this will create empty items in the array without knowing the end index
// numbers.push(5);
// // console.log(numbers[0]);
// // console.log(numbers[30]); wont show error but will display 'undefined'
// console.log(numbers);


let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
// for (let i = 0; i < secondArray.length; i++) {   old fashion array addition
//     const element = secondArray[i];
//     firstArray.push(element);
// }
// console.log(firstArray);

// firstArray.push(...secondArray); console.log(firstArray);    modern array addition

let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);
