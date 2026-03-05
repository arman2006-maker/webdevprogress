// 7. closures. 
// function outer(){
//     let count=0;
//     return function inner(){
//         count++;
//         console.log(count);
        
//     }
// }
// let ans=outer();
// ans()
// ans()
// ans()


// 8.recurring
// via regular function
// function add(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d
//             }
//         }
//     }
// }
// let ans=add(1)(2)(3)(4)
// console.log(ans);

// // via arrow function
// let sub = a=> b=> c=> d=> a+b+c+d
// console.log(sub(1)(2)(3)(4));






