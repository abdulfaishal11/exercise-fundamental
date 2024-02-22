//  // Example 1:
// //  let reduce = function(nums, fn, init) {
// //     let total = 0;
// //     for (let calculate of nums) {
// //         total += calculate
// //     }
// //     return total;
// // };
// // let result = reduce([1,2,3,4]);
// // console.log(result);

// var reduce = function(nums, fn, init) {
//     let total = 0;
// for (let calculate of nums) {
//     total += calculate
// }
// return total;
// };

// const fn = function (accum, curr, init) {
  
//     init += (curr[i]**2) 

// }


// const init = 100; 



// var result = reduce([1,2,3,4], fn, init);
// console.log(result);





// // Example 2:
// let sum = function(nums, curr, init) {

//     let total = 0;
    
//     for (i=0 ; i<= curr.length-1; i++) {
//         if(init === 0){
//              for(let calculate of nums) {
//                 total += calculate
//             } return total
//         }
//         let num = []
//         if(init === 25) {
//             num += init
//         } else {
//         init += (curr[i]**2) 
//         }
        
//     }
//     return init
// };

// let nums = [1,2,3,4]
// let curr = [1,2,3,4]

// console.log(sum(nums,curr,0));
// console.log(sum(nums,curr,100));
// console.log(sum(nums,curr,25));


// //Example 3 :
// let reduce3 = function(acc,cur) {
//     return acc += cur
// }
// const output = reduce3(25,[])
// console.log(output);


// var createHelloWorld = function(arg) {
    
//     return arg
// }
// const func = createHelloWorld(["Hello World"])
// console.log(func);


let reduce = function(nums, fn, init) {
    let accum = init
    for(i=0 ; i<=nums.length-1 ; i++) {
        accum = fn(accum,nums[i]);
    }
    return accum
}
const nums = [1,2,3,4]
const init = 0
const fn = function sum(accum,curr){
    return accum + curr
}

const red = reduce([1,2,3,4], fn, 0)
console.log(red);