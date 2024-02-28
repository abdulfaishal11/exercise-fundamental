//  01.  Get the lowest, highest and average value in the array (with and without sort function).
//Without function :

//    console.log(Math.min(join));
//     const lowest = Math.min(join)
//     console.log(lowest)

//With Function

function number1(minimum) {
  minimum.sort((a, b) => {
    return a - b;
  });
  let findMin = minimum.find((min) => {
    if (min <= minimum[0]) return min;
  });
  return findMin;
}
function number2(maximum) {
  maximum.sort((a, b) => {
    return b - a;
  });
  let findMax = maximum.find((max) => {
    if (max <= maximum[0]) return max;
  });
  return findMax;
}
function number3(average) {
  let num = 0;
  for (i = 0; i < average.length; i++) {
    num += average[i];
  }
  let averages = num / average.length;
  return averages;
}

const lowest = number1([12, 5, 23, 18, 4, 45, 32]);
const highest = number2([12, 5, 23, 18, 4, 45, 32]);
const average = number3([12, 5, 23, 18, 4, 45, 32]);

console.log(lowest);
console.log(highest);
console.log(average);

//  02. takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

function string(fruit) {
  let fruits = fruit.splice(3, 0, "and");
  let join = fruit.join(",");
  console.log(join);
  return join;
}
let result = string(["apple", "banana", "cherry", "date"]);
console.log(result);

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

                for(let i=0 ; i< maxLength ; i++) {
                    const sum = (arr1[i] || 0) + (arr2[i] || 0)
                    result.push(sum)
                }
                return result
            }

            console.log(calculateArray([1,2,3,5] , [1,2,3]));

// 05. Adds an element to the end of an array. However, the element should only be added if it is not already in the array.
function newArray(array, element) {
  const newElement = array.push(element);
  console.log(array);
  element;
}
const newElement = newArray([1, 2, 3, 4], 5);
console.log(newElement);

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
    if (values[i] - i === 0) return i;
  }
}
const dup = duplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]);
console.log(dup);

//  10.  find the difference in 2 given array
function array(arr1, arr2) {
  const combine = arr1.concat(arr2);
  console.log(combine);
  const different = combine.filter((e, i) => {
    combine.findIndex((a) => {
      (a.e === e.e) === i;
      return combine;
    });
  });
}
const results = array([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(results);

//  11. Write a function that will return primitive data types only

const dataTypes = [1, [], undefined, {}, "string", {}, []];
const primitiveData = dataTypes.filter((e) => {
  if (dataTypes === "object") return e;
});
console.log(primitiveData);

let sd = {
  makan: 12,
  minim: 12,
};
console.log(typeof sd);

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
        }
        return result
    }
    console.log(sumDuplicate ([10, 20, 40, 40, 10, 50, 30, 10, 60, 10]));

// No.15 Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
        //  a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
    function gameSuit(playerChoice) {
        const choices = ["baru", "gunting", "kertas"];
        const compChoice = choices[Math.floor(Math.random() * 2,9)]

        if(!choices.includes(playerChoice)) {
            return "wrong input"
        }

        if(playerChoice === compChoice) {
            return "draw"
        }
        if(
            (playerChoice === "batu" && compChoice === "gunting") ||
            (playerChoice === "gunting" && compChoice === "kertas") ||
            (playerChoice === "kertas" && compChoice === "batu")
            
        ) {
            return "win"
        }
        return "lose"
    }

    console.log(gameSuit("gunting"))