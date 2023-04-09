// // // 1. Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

"use strict";

let arrNum = [3, 4, 7, 9, 12, 23, 18, 27, 30];
let evenSum = 0;

for (let i = 0; i < arrNum.length; i++) {
  console.log(typeof i, arrNum[i]);
  if (arrNum[i] % 2 == 0) {
    evenSum = evenSum + arrNum[i];
    console.log(typeof evenSum);
    console.log(typeof arrNum[i]);
  }
}
console.log(evenSum);

// // for( let i of arrNum){
// //     if(i % 2 ==0)
// //     {
// //         evenSum = evenSum+i
// //     }
// //     // console.log(i, "helo")
// // }
// // console.log(evenSum)
//   console.log(arrNum)

// function calc(value){
//         if(value % 2 ==0)
//     evenSum = evenSum + value;
//     return 1
// }
// arrNum.forEach(calc)
// console.log(evenSum)
// // console.log(newArr)

// evenSum = 0;
// const newArr = arrNum.map(calc)
// console.log(evenSum)
// console.log(newArr)

// 2. Write a function that takes two arrays as input and returns a new array that contains all elements that are present in both input arrays.

let arr1 = [3, 4, 15, 43, 4, 9, 20, 54, 6];
let arr2 = ["hi", "f", "hot", "that"];

let arr3 = arr1.concat(arr2);
console.log(arr3);

// 3. Write a function that takes an array of numbers as input and return a new array that contains the square of each number in the input array

let array_of_numbers = [3, 5, 12, 2, 20, 44];

// console.log(array_of_numbers)

// array_of_numbers.forEach(function(value, index, array){
//             array[index] = value*value
//     })
//     console.log(array_of_numbers)

function sq(element) {
  return element * element;
}
let square_of_Array = array_of_numbers.map(sq);
console.log(square_of_Array);

//  4. Write a function that takes an array of objects where each object has a 'name' property and returns a new
//    array that contains only the names of the objects
let students = [
  { firstName: "Hari" },
  { firstName: "Shyam" },
  { firstName: "Ram" },
  { firstName: "Mina" },
];

let namedStudents = students.map(
  (names_of_students) => names_of_students.firstName
);
console.log(namedStudents);

// 5. Write a function that takes an array of string as input and returns a new array where each element is
// the length of the corresponding string in the input array

let newArr = [];

let girls = ["Mina", "Dipali", "Saraswati"];
function lengths(array) {
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].length);
  }
  return newArr;
}
console.log(lengths(girls));

// //  //6. Write a function that takes an array of objects, where each object has a "name" and "age" property, and returns a new array that contains only the names of the objects sorted by their age, from youngest to oldest.

let arrayList = [
  { names: "Raj", age: 43 },
  { names: "Rajesh", age: 15 },
  { names: "Ramesh", age: 20 },
  { names: "Rajiv", age: 80 },
];

let new_list_array = 0;
function sortList(a, b) {
  return a.age - b.age;
}
console.log(arrayList.sort(sortList));
for (let i of arrayList) {
  new_list_array = console.log(i.names);
}

// 7. Write a function that takes an array of strings as input and returns the most frequent string in the array.
//If there are multiple strings with the same frequency, return the one that appears first in the array.

// let freqString = ['this', 'is', 'javascript', 'and', 'javascript', 'is', 'hard', 'so', 'practice', 'hard', 'to', 'learn', 'javascript']

// 8. Write a function that takes an array of numbers as input and returns the longest consecutive sequence of numbers in the array.For example, given the input [1, 2, 3, 5, 6, 8], the function should return [1, 2, 3].

let seqArray = [1, 2, 3, 5, 6, 8];

//9. Write a function that takes an array of objects, where each object has a "name" and "age" property,
//and returns a new array that contains only the names of the oldest three objects.

let array_of_age = [
  { yourName: "hari", yourAge: 20 },
  { yourName: "raju", yourAge: 12 },
  { yourName: "sumit", yourAge: 34 },
  { yourName: "anil", yourAge: 10 },
  { yourName: "anil", yourAge: 10 },
  { yourName: "anil", yourAge: 10 },
  { yourName: "anil", yourAge: 10 },
];

function sortAge(a, b) {
  return a.yourAge - b.yourAge;
}
function sortingArray(arrgroup) {
  let sortedArray = array_of_age.sort(sortAge);
  return sortedArray.slice(-3).map((ageArray) => ageArray.yourName);
}

console.log(sortingArray(array_of_age));

//10. Write a function that takes two arrays of numbers as input and returns a new array
//where each element is the difference between the corresponding elements of the input arrays.
//For example, given the input [1, 2, 3] and [4, 2, 1], the function should return [-3, 0, 2].

let firstArr = [1, 2, 3];
let secondArr = [4, 2, 1];

let thirdArr = [];
for (let i in firstArr) {
  thirdArr[i] = firstArr[i] - secondArr[i];
}
console.log(thirdArr);

// //11. create a javascript class for a stack data structure that allows for pushing and popping elements and also provides method for checking if the stack is empty or full

class stack{
  constructor(){
    this.items = [];
  }
    add(x){
       return this.items.push(x);

    }
    remove(){
      return this.items.pop();
    }
    stackLength(){
      this.items.length;
    }
    peek(){
      return this.items[this.items.length - 1];
  }
  isEmpty(){
    return this.items.length == 0;
  }
  isFull(){
    if(this.items.length > 0){
      return this.items
    }
    
  }
  }
  let s1 = new stack();

  s1.add(1);
  s1.add(2);
  s1.add(3);
  s1.add(4);
  console.log(s1.items);

s1.remove();
console.log(s1.items);

console.log(s1.peek());

console.log(s1.isEmpty());

console.log(s1.isFull());