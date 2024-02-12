// No.1 celcius to fahrenheit
// const celcius = 60;
// const result = (celcius * 9 ) / 5 + 32;
// console.log(result);

// Fahrenhei to celcius
// const fah = 140
// const result = ((fah -32) *5) /9
// console.log(result);


// No.2 
// const angka = 25;
// if (angka % 2 ===0) {
//     console.log("genap")
// } else {
//     console.log("ganjil")
// }

// console.log(angka%2 ===0 ? "genap" : "ganjil");

// No.3
// const num = 7;
// let isPrime = false;

// for(let i=2 ; i<num ; i++) {
//     if(num%i == 0) {
//         isPrime = false;
//         break;
//     }
// }
// console.log(isPrime);

// No.4 
// const num = 5;  //CARA1
// const result = (num*(num+1)/2);
// console.log(result);

// const angka = 5;
// let sum = 0;
// let massage = ""; //untuk menampung hasilnya

// for(let i=1 ; i<=angka ; i++) {
//     sum +=i;

//     massage +=i + (i !==angka ? "+" : "");
// }
// console.log(sum);
// console.log(massage + "=" + sum)

// No.5 --> faktorial
// const num =5;
// let result =1;
// let message = "";

// for(let i=5 ; i>1 ; i--) {
//     result *= i;

//     message += i + (i===1 ? "" : "+") ;
// }
// console.log(result);
// console.log(message + "=" + result);

// No.6 --> Fibonacci
const n =15;

let a=0;
let b=1;
for (let i=0 ; i<n ; i++) {
    let next = a+b ;
    a=b;
    b=next;
}
console.log(a)

