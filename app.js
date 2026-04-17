

// Section 1: MCQs


// Answer: 1 = map() returns: New array
// Answer: 2 = filter() is used for: Selecting elements based on condition
// Answer: 3 = forEach() returns: Undefined
// Answer: 4 = First matching element method: find()
// Answer: 5 = Index of first match method: findIndex()




// Section 2: 

// Answer: 1 = [2, 4, 6, 8]
// Answer: 2 = [15]
// Answer: 3 = 6


// Section 3: Coding


// Answer: 1
// let arr = [1,2,3,4,5];
// let result = arr.map(x => x * x);
// console.log(result);
//  // [1,4,9,16,25]


// Answer: 2
// let arr = [1,2,3,4,5];
// let result = arr.filter(x => x % 2 === 0);
// console.log(result); // [2,4]


// Answer: 3
// let arr = [1,2,3,4,5];
// let sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum);
//  // 15


// Answer: 4
// let arr = [1,2,3,4,5];
// let result = arr.find(x => x > 3);
// console.log(result);
//  // 4




// Answer: 5
    // let arr = [1,2,3,4,5];
    // let index = arr.findIndex(x => x === 4);
    // console.log(index); 
// 3



// Answer: 6

// let arr1 = [1,2];
// let arr2 = [3,4];
// let result = arr1.concat(arr2);
// console.log(result);
 // [1,2,3,4]


// Answer: 7
// let arr = ['Hello','World'];
// let result = arr.join(' ');
// console.log(result);
//  // "Hello World"


// Answer: 8
// let arr = [5,3,1,4,2];
// arr.sort((a,b) => a - b);
// console.log(arr);
 // [1,2,3,4,5]


// Answer: 9

// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr); 
// [5,4,3,2,1]



// Section 4: Real-Life Coding



// let students = [
//   {name:'Ali', marks:80},
//   {name:'Sara', marks:45},
//   {name:'Ahmed', marks:70}
// ];

// // 1. Passing students
// let passing = students.filter(s => s.marks > 50);
// console.log(passing);

// // 2. Extract names
// let names = students.map(s => s.name);
// console.log(names);

// // 3. Total marks
// let total = students.reduce((acc, s) => acc + s.marks, 0);
// console.log(total); 
// // 195