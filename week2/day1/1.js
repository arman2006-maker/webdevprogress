//reverse()
// let arr=[1,2,3,4,5];
// arr.reverse();
// console.log(arr); // [5,4,3,2,1]

//join
// let arr=[1,2,3,4,5];
// let str=arr.join("-");
// console.log(str); // "1-2-3-4-5"

//split
// let str="hello world";
// let arr=str.split(" ");
// console.log(arr); // ["hello", "world"]


// let str="hello world";
// let arr=str.split(" ");
// let newStr=arr.reverse().join(" ");
// console.log(newStr)// "world hello"




//.slice and splice

// let arr=[1,2,3,4,5];
// let ans=arr.slice(1,4);
// console.log(ans); // [2,3,4]
// console.log(arr); // [1,2,3,4,5]    


// let arr2=[1,2,3,4,5];
// let removed=arr2.splice(1,3);
// console.log(removed); // [2,3,4]
// console.log(arr2); // [1,5]   


//template literals

// let name="John";
// let age=30;
// console.log(`"my name is ${name} my age is ${age}"`);
// "my name is John my age is 30"




// // finc with default parameters
// function greet(name="Guest"){
//     console.log(`Hello, ${name}!`);
// }

// greet("Alice"); // Hello, Alice!
// greet(); // Hello, Guest!       


// arrow functions
// const add=(a,b)=>a+b;

// console.log(add(2,3)); // 5 
// console.log(add(10,20)); // 30  


//map 
// let numbers=[1,2,3,4,5];
// let squared=numbers.map(num=>num*num);
// console.log(squared); // [1,4,9,16,25]


// //filter
// let numbers=[1,2,3,4,5];
// let evenNumbers=numbers.filter(num=>num%2===0);
// console.log(evenNumbers); // [2,4]  


// //sort
// let numbers=[5,2,8,1,4];
// numbers.sort((a,b)=>a-b);
// console.log(numbers); // [1,2,4,5,8]    



//reduce=> returns single datatype values
let numbers=[1,2,3,4,5];
let sum =numbers.reduce((acc,el)=>acc+el,"");
console.log(sum); // 15





