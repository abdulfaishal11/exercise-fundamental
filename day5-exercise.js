//  01.  Get the lowest, highest and average value in the array (with and without sort function).
//Without function :

//    console.log(Math.min(join));
//     const lowest = Math.min(join)
//     console.log(lowest)

//With Function => My solve

// function number1(minimum) {
//   minimum.sort((a, b) => {
//     return a - b;
//   });
//   let findMin = minimum.find((min) => {
//     if (min <= minimum[0]) return min;
//   });
//   return findMin;
// }
// function number2(maximum) {
//   maximum.sort((a, b) => {
//     return b - a;
//   });
//   let findMax = maximum.find((max) => {
//     if (max <= maximum[0]) return max;
//   });
//   return findMax;
// }
// function number3(average) {
//   let num = 0;
//   for (i = 0; i < average.length; i++) {
//     num += average[i];
//   }
//   let averages = num / average.length;
//   return averages;
// }

// const lowest = number1([12, 5, 23, 18, 4, 45, 32]);
// const highest = number2([12, 5, 23, 18, 4, 45, 32]);
// const average = number3([12, 5, 23, 18, 4, 45, 32]);

// console.log(lowest);
// console.log(highest);
// console.log(average);

// Lecture solve :


// const arr2 = [12, 5, 23, 18, 4, 45, 32];

// function array(num) {
//     const lowest = Math.min(...num);
//     const highest = Math.max(...num);
//     let sum = 0;

//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }

//     let average = sum / num.length;
//     average = average.toFixed(4);

//     return { lowest, highest, average };
// }

// console.log(array(arr2));

//  02. takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

function string(fruit) {
  let fruits = fruit.splice(3, 0, "and");
  let join = fruit.join(",");
  console.log(join);
  return join;
}
let result = string(["apple", "banana", "cherry", "date"]);
console.log(result);

//lecture solve : 
//cara 1 : 
const arr1 = ["apple", "banana", "cherry", "date"];

function concentenatedString(arr1) {

    const lastWord = arr1.pop();
    console.log(arr1);
    console.log(lastWord); //menghapus date
    const result = arr1.join(",") + " and " + lastWord;

    return result;
  }

console.log(concentenatedString(arr1));


//cara 2 : 
const arr = ["apple", "banana", "cherry", "date"];

function concStr(fruit) {
  if (fruit.length === 0) {
    return "";
  }

  const lastWord = fruit.slice(-1);
  const otherWords = fruit.slice(0, -1);

  const result = otherWords.join(",") + (otherWords.length > 0 ? ", and " : "") + lastWord;

  return result;
}

console.log(concStr(arr));

// 03. Split a string and convert it into an array of words
//Menggunakan built in method
const word = "Hello World";
console.log(word.split(" "));

//Tanpa menggunakan built in method
function split() {
  return arguments;
}
let resulte = split("Hello World");

// for (let i=0 ; i<input.length ; i++) {
//     if(input[i] === " ") {
//         kata.push(temp);
//         temp = "";
//         continue
//     }
//     // temp += input[i]

// }

// 04. calculate each element in the same position from two arrays of integer. Assume both arrays area of the same length.
        // Cara 1 
            let cal1 = [1, 2, 3];
            let cal2 = [3, 2, 1];
            cal1.map((element, index) => {
            return (cal1[index] += cal2[index]);
            });
            console.log(cal1);

        // Cara 2
            function calculateArray(arr1, arr2) {
                const result = []
                const maxLength = Math.max(arr1.length,arr2.length)

                console.log(maxLength);

                for(let i=0 ; i< maxLength; i++) {
                    const sum = (arr1[i] || 0) + (arr2[i] || 0)
                    console.log(sum);
                    result.push(sum)
                }
                return result
            }

            console.log(calculateArray([1,2,3,5] , [1,2,3]));

// 05. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

let ar = [1, 2, 3, 4];

function addArray(data) {
  ar.push(data);
  return ar;
}

console.log(addArray(5));
console.log(addArray(7));
console.log(addArray(8));


// 06.  Remove all odd numbers in an array and return a new array that contains even numbers only
// function number (numbers) {
//     if(numbers % 2 === 0) {

//     }
// }
// number([1,2,3,4,5,6])

const number = [1, 2, 3, 4, 5, 6];
const numbers = number.filter((e) => {
  if (e % 2 === 0) return e;
});
console.log(numbers);

//  07.  insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements)
// function integer(max) {
//   for (i = 5; i <= max.length; i++) {
//     return max;
//   }
// }
// const max = integer([5, 10, 24, 3, 6, 7, 8]);
// console.log(max);

    //Cara 2
    function maxSize (max, ...numb) {
        const result = []; 

        numb.forEach((item) => {
            if(result.length === max) return;
            result.push(item);
        })
        return result

    }
    const max = 5;
    const numb = (5,10,24,3,6,7,8) 
    console.log(maxSize(max, 5,10,24,3,6,7,8))

// 08. Combine 2 given array into one array
function combine(com1, com2) {
  let combination = com1.concat(com2);
  return combination;
}
const resl = combine([1, 2, 3], [4, 5, 6]);
console.log(resl);

//  09. Find duplicate values in an array
//    const values = [1,2,2,2,3,3,4,5,5]
//    const duplicate = values.filter((e,) => {
//         if (e == 2)
//         return e
//    })
//    console.log(duplicate);

function duplicate(values) {
  for (i = 0; i < values.length; i++) {
    if (values[i] - i === 0) return values[i];
  }
}
const dup = duplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]);
console.log(dup);

//  10.  find the difference in 2 given array
// function array(arr1, arr2) {
//   const combine = arr1.concat(arr2);
//   console.log(combine);
//   const different = combine.filter((e, i) => {
//     combine.findIndex((a) => {
//       (a.e === e.e) === i;
//       return combine;
//     });
//   });
// }
// const results = array([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// console.log(results);

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];

function findDiff(a, b) {
  const diff1 = a.filter(element => !b.includes(element));
  const diff2 = b.filter(element => !a.includes(element));

  return diff1.concat(diff2);
}

console.log(findDiff(a, b));

//  11. Write a function that will return primitive data types only

// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

arrs = [1, [], undefined, {}, "string", {}, []];

function filter(arrs) {
  return arrs.filter(item => 
    typeof item !== "object"
  );
}

console.log(filter(arrs));

//No.14 Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

    function sumDuplicate(arr) {
        const duplicateValues = arr.filter((value,index,array) => {
            //Sebagai patokan untuk mengecek looping kedua
            return array.indexOf(value) !== index;
        })
        console.log(duplicateValues);

        let result = 0 ;
        for (let item of arr) {
            if (duplicateValues.includes(item)) {
                result += item;
            }
            console.log(result);
        }
        return result
    }
    console.log(sumDuplicate ([10, 20, 40, 40, 10, 50, 30, 10, 60, 10]));

// No.15 Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
        //  a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function playGame(playerMove) {
  const pick = ["rock", "paper", "scissors"];

  const computerMove = pick[Math.floor(Math.random() * 2.9)];
  console.log(computerMove);

  if (playerMove === computerMove) {
    return "Tie";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}

console.log(playGame("paper"));
console.log(playGame("scissors"));
console.log(playGame("rock"))