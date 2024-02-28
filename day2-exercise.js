// 01 convert celcius to fahrenheit
let celcius = 60
let pointBoilingCelcius = 100
let pointBoilingFahrenheit = 180
let differentOfCelciusFahrenheit = 32
celciusToFahrenheit = (pointBoilingFahrenheit / pointBoilingCelcius * celcius) + differentOfCelciusFahrenheit
console.log(celciusToFahrenheit + ' fahrenheit')

//  02 Check whether the number is odd or not 
const number = 20;
if (number % 2 === 0) {
    console.log("Even Number") 
} else {
    console.log("Odd Number");
}

// 03 Check whether the number is prime number or not 
const numbers= 9;
if (numbers % 2 === 1) {
    console.log("Its a prime number");
} else {
    console.log("its not a prime number");
}

// 04 Find the sum of the numbers 1 to N 

// let sum = [1,2,3,4,5];
// for (let i=0 ; i <= sum.length ; i++){
//     let+=sum[i]
// }
// console.log(`1+2+3+4+5 = ${sum}`)

// // 05 Find factorial of a number 
// let summary = [4,3,2,1];
// for (let i=0 ; i <= summary.length ; i++) {
//     i*=summary[i]
// }
// console.log(`4x3x2x1 =  ${summary}`);

// First Name Fibonnaci numbers
const n =5;

let a=0;
let b=1;
for (let i=0 ; i<n ; i++) {
    let next = a+b ;
    a=b;
    b=next;
}
console.log(a)

var fibGenerator = function(n) {

let a=0;
let b=1;
for (let i=0 ; i<n ; i++) {
    let next = a+b ;
    a=b;
    b=next;
};
return n
}

const gen = fibGenerator(15)
console.log(gen);


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

