//5.execution context

// console.log("start");
// console.log(one());

// function three() {
//     return "hello aspiring developers"
// }
// function one() {
//     console.log(name);
//     var name = "radhe radhe"
//     three();
//     return name;
// }
// console.log("mid");
// two()
// console.log("end");
// one()
// function two() {
//     console.log("error")
//     let age = 25;
//     console.log(three());
//     console.log(age);
// }
// console.log(two());
 



// 6. timer
//  runs only one time with delay
// setTimeout(()=>{
//     console.log("hello developers");
// },5000)


//   runs infinite time with delay
// setInterval(()=>{
//     console.log("hello developers");
// },5000)


// 7.Event Loop, 
// it is a fundamental mechanism that helps js to perform asynchronous operation while maintaining a sychronous programming language

//start ,mid,end,
// 5000 > undefined ,
// 10000> err , hello developers
// har 15000 hello developers


// console.log("start");

// setInterval(()=>{console.log(three());
// },15000)

// console.log("mid");

// setTimeout(()=>{
//     two()
// },10000)

// function one(){
//     console.log(name);
//     var name = "rahul"
//     three();
//     return "ram"
// }


// function three(){
//     return "hello developers"
// }

// setTimeout(()=>{
//     one()
// },5000)
// console.log("end");

// function two(){
//     console.log("error");
//     console.log(three());
//     let age = 25;
// }


