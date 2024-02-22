// 01.  Create a function that can create a triangle pattern according to the height we provide like the
//      following :
//      01
//      02 03
//      04 05 06
//      07 08 09 10

     function triangle(height) {
  let x = "";
  let count = 1;
  
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      x += count.toString().padStart(2, 0) + " ";
      count++;
      }
    x += "\n";
  }
  return x;
}
console.log(triangle(4));

// 01 - --
// function triangle(height) {
//   let currentNumber = 1;

//   for (let i = 1; i <= height; i++) {
//     let row ="";

//     for (let j = 1; j <= i; j++) {
//       row += (currentNumber < 10 ? "0" : "") + currentNumber + " ";
//       currentNumber++;
//     }

//     console.log(row);
//   }
// }
// triangle(5)

   
// // 02.  Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz"
        
       function totalLooping(n) {
  let count = 1;
  let x = "";
  const a = "Fizz";
  const b = "Buzz";

  for (let i = 1; i <= n; i++){
    if (count % 3 === 0 && count % 5 === 0) {
      x += a+b;
    } else if (count % 3 === 0) {
      x += a;
    } else if (count % 5 === 0) {
      x += b;
    } else {
      x += count;
    }
    if (i < n) {
      x += ", ";
    }
    count++;
  }
  return x;
}  

console.log(totalLooping(15));

    //     function fizzBuzz(n) {
    //         let message = " ";

    //         for (let i=1 ; i<=n ; i++) {
    //         if (i%3 === 0 && i%5 === 0) {
    //             message += "fizzBuzz "
    //         } else if ( i%3 ===0) {
    //             message += "Buzz "
    //         } else if (i%5 === 0) {
    //             message += "Fizz "
    //         } else {
    //             message += i + " "
    //         }
    //     }
    //     console.log(message);
    // }
    // fizzBuzz(15)
    
//  03. Create a function to calculate Body Mass Index (BMI)
    // ● Formula : BMI = weight (kg) / (height (meter))²
    // ● Parameters : weight & height
    // ● Return values :
    // ○ < 18.5 return “less weight”
    // ○ 18.5 - 24.9 return “ideal”
    // ○ 25.0 - 29.9 return “overweight”
    // ○ 30.0 - 39.9 return “very overweight”
    // ○ > 39.9 return “obesity”

    function calculateBmi(weigh, heigh) {
        const bmi = weigh / (heigh*heigh)
    
    if(bmi < 18.5) {
        return "Less Weight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Ideal"
    } else if( bmi>=25.0 && bmi<= 29.9) {
        return "Overweight"
    } else if (bmi >=30.0 && bmi <= 39.9) {
        return "vwry Overweight"
    } else {
        return "Obesity"
    }}
    const result = calculateBmi(78, 1.75);
    console.log(result);

//  04. Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]


    function removeOddNumber(arr) {
        return arr.filter((item) => item%2 ===0) //filter mereturn array baru
    }
    const inputArr = [1,2,3,4,5,6,7,8,9,10];
    console.log(removeOddNumber(inputArr));

    // Tanpa build in method
    function removeNumber(arr) {
        const evenNumbers = []

        for (let i=0 ; i<arr.length ; i++) {
            if(arr[i] %2 === 0) {
                evenNumbers.push(arr[i])
            }
        }
        return evenNumbers;
    }
    const inputArr1 = [1,2,3,4,5,6,7,8,9,10]
    console.log(removeNumber(inputArr1));
    

// 05. Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

    //Menggunakan built in method
    const word = "Hello World"
    console.log(word.split(" "))

    //Tanpa menggunakan built in method


    const splitString = function(input) {
        const kata = [];
        let temp = ""
        console.log(input);

    for (let i=0 ; i<input.length ; i++) {
        if(input[i] === " ") {
            kata.push(temp);
            temp = "";
            continue
            }
        temp += input[i]
        
        }
        kata.push(temp)
        return kata 
        
    }
    console.log(splitString("Hello World"))

