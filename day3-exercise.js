// 01 - Display the multiplication table of a given integer 
const number = 9;

for (let i=1 ; i <= 10 ; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
} 

// 02 -  Check whether a string is a palindrome or not
// const word = "m";
// const split = word.split('');
// // console.log(split)  

// const reverse = split.reverse()
// // console.log(reverse)
// const palindrome = reverse.join('')
// // console.log(palindrome)

// if (word === palindrome) {
//     // console.log("The word is palindrome");
// } else {
//     console.log("The word is NOT palindrome");
// };

    const kata = "jogja";
    let reverse = ""

    //reverse = "ajgoj"
    for (let i = kata.length-1 ; i>=0 ; i--){
        reverse += kata[i]
        console.log(kata[i])
    }
    console.log(reverse)
// 03 -  Convert centimeter to kilometer

let cm = 10000

// convert from cm
toKm = cm / 100000
toHam = cm / 10000
toDam = cm / 1000
toM = cm / 100
toDm = cm / 10
toMm = cm * 10

console.log(`${toKm} km`)

// 04 -  format number as currency (IDR)
let currentNumber = 100000
// let toCurrency = currentNumber.toLocaleString('id-ID',{currency:'IDR', style: 'currency'})

// console.log(toCurrency)

    //cara2
    const currency = new Intl.NumberFormat("id-ID", {
        style : 'currency',
        currency : "IDR",
        maximumFractionDigits : 0,
    })
    console.log(currency.format(currentNumber));



// 05 -  Remove the first occurrence of a given “search string” from a string
let string = "Hello World";
let splt = string.split('')
// console.log(splt)
let deleteSplt = (delete splt[1], delete splt[2], delete splt[3]);
let join = splt.join('')
console.log(join);

    //cara 2.
    const words = "Hello Word";
    const search = "ell";
    const replaceWith = "";

    const remove = words.replace(search, replaceWith)
    console.log(remove)

// 06 - Capitalize the first letter of each word in a string

    //Cara 1 - menggunakan build in method
let letter = "hello world"

let firstCapitalize = letter.slice(0,1).toUpperCase()
let lowerLetter = letter.slice(1,6)
let firstCapitalize2= letter.slice(6).slice(0,1).toUpperCase()
let lowerLetter2 = letter.slice(7)

console.log((firstCapitalize+lowerLetter) + (firstCapitalize2+lowerLetter2)) 

    // cara 2 dengan loop for
    const inputt = "hello world"
    let wordss = inputt.split(" ");

    console.log(wordss)

    for(let i=0 ; i<wordss.length ; i++){
        wordss[i] = wordss[i][0].toUpperCase() + wordss[i].slice(1);

    }
    console.log(wordss);
    console.log(wordss.join(" "));

// 07 - Reverse a string.
let strings = "hello"
let arrayStrings = strings.split('')
console.log(arrayStrings.reverse('').join(''))

    //cara2 dengan loop for
    const str11 = "hello";
    let message = "";

    for (let i= str11.length-1 ; i >= 0 ; i--) {
        message += str11[i];
    }
    console.log(message);

// 08 - Swap the case of each character from string

    // Cara 1 dengan built in method
let case1 = "The QuiCk BrOwN Fox"
let split1= (case1.split(' '));
let wordSplit1 = split1[0].replace('The','tHE')
let wordSplit2= split1[1].replace('QuiCk',' qUIcK')
let wordSplit3= split1[2].replace('BrOwN',' bRoWn')
let wordSplit4= split1[3].replace('Fox',' fOX')

console.log(wordSplit1 + wordSplit2 + wordSplit3 + wordSplit4);

    // Cara 2 
    const inputString = "The QuiCk BrOwN Fox"
    let swappedString = ""

    for (let i = 0 ; i < inputString.length ; i++) {
        const char = inputString[i];

        if(char === inputString[i].toUpperCase()) {
            swappedString += char.toLowerCase(); 
        } else {
            swappedString += char.toUpperCase();
        }

    }
    console.log(swappedString)


// 09 -  Find the largest of two given integers
let num1 = 1
let num2 = 44

if(num1 > num2) {
    console.log(`${num1} largest`)
} else if(num2 > num1) {
    console.log(`${num2} largest`)
} else if (num2 === num1) {
    console.log(`${num2} both equal `)
} else {
    console.log(`Please input the number`)
}

// 10 - Sort three numbers with conditional statement
let number1 = 42
let number2 = 27
let number3 = 18
let sortNumber = [number1, number2, number3];
console.log(sortNumber.sort().join(' '))

    // Cara 2 
    const numb1 = 42;
    const numb2 = 27;
    const numb3 = 18;

    const smallest = Math.min(numb1, numb2, numb3);
    const largest = Math.max(numb1, numb2, numb3);
    const middle = numb1 + numb2 + numb3 - smallest - largest

    console.log(`${smallest}, ${middle}, ${largest}`)



// 11 - shows 1 if the input is a string  2 if the input is a number, and 3 for others data type.
let input = "Hello"

if (typeof(input) === 'string'){
    type = 1;
} else if (typeof(input) === 'number'){
    type = 2;
} else {
    type = 3;
}

console.log(type)

// 12 - change every letter a into * from a string of input
let str = "An apple a day keeps the doctor away"
let changeA = str.replaceAll('a','*').replace('A','*');
console.log(changeA)

    //Cara 2 menggunakan looping
const modifiedStr = "*";
let result = "";

for (let i = 0 ; i < str.length; i++) {
    if (str[i] === 'a' || str[i] ==="A") {
        result += modifiedStr
    } else {
        result  += str[i]
    }
}
console.log(result);














