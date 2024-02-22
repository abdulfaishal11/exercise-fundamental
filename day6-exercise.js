//EXERCISE 1 :
// Create a function to calculate array of student data
// a. The object has this following properties :
//      ○ Name → String
//      ○ Email → String
//      ○ Age → Date
//      ○ Score → Number
// b. Parameters : array of student
// c. Return values :
//       Object with this following properties :
//          i. Score
//              ● Highest
//              ● Lowest
//              ● Average
//          ii. Age
//              ● Highest
//              ● Lowest
//              ● Average

// class StudentData {
//     constructor(name,email,age,score) {
//         this.nameame = name;
//         this.email = email;
//         this.age = age;
//         this.score = score;
//     }

//     data(score) {
//         let ages = this.age
//         ages
        

//     }
// }


// const student1 = new StudentData(["adit","abdit@gmail.com",21,75])
// student1.data()
// const student2 = new StudentData(["wati","ayu@gmail.com",17,85])
// student2.data()
// const student3 = new StudentData(["dodo","dodo@gmail.com",39,81])
// student3.data()
// const student4 = new StudentData(["messi","messi@gmail.com",36,70])
// student4.data()
// const student5 = new StudentData(["madun","madun@gmail.com",27,87])
// student5.data()



// let angka = [1,1,3,4,2]
// console.log(Math.max.apply(Math,angka))
// let numb = (1,2,3,4,9,8)
// console.log(numb.MAX_VALUE)

let dataStudent = [
    {name : "wati", email : "wati@gmail.com", age: 17, score : 75},
    {name : "adit", email : "adit@gmail.com", age: 21, score : 85},
    {name : "dodo", email : "dodo@gmail.com", age: 39, score : 81},
    {name : "messi", email : "messi@gmail.com", age: 36, score : 70},
    {name : "madun", email : "madun@gmail.com", age: 27, score : 87},
]
console.log(dataStudent.length);

function calculate (scores,age) {
    let score = [];
    for (i=0 ; i<dataStudent.length ; i++) {
        scores.push(dataStudent[i]['scores'])
    }
    console.log(score);

    let scoreMax = []
    Math.max(...scores);
    console.log(scoreMax);

    let scoreMin = Math.min(...scores);
    console.log(scoreMin);

    let scoreAverage = scores.reduce((a,b) => a+b, 0) / scores.length
    console.log(scoreAverage);

    let ages = []
    for(i=0 ; i<dataStudent.length; i++) {
        const getAge = birthDate => Math.floor((new Date ().getTime()/(365.25*24*3600*1000)))
    }

    const age = getAge(dataStudent[i]['age'])
    ages.push(age)
}
console.log(ages);

    let ageMax = Math.max(...ages);
    console.log(ageMax);

    let ageMin = Math.min(...ages);
    console.log(ageMin);

    let ageAverage = ages.reduce((a,b) => a+b,0)/ages.length
    console.log(ageAverage);

    const result = [
        {score: {highest: scoreMax, lowest: scoreMin, average: ageAverage}}
    ]
return result

console.log(calculate(dataStudent));



// 02. Create a program to create transaction
//      a. Product Class  
//          ○ Properties
//              ■ Name
//              ■ Price

//      b. Transaction Class
//          ○ Properties
//              ■ Total
//              ■ Product
//                  ● All product data
//                  ● Qty
//          ○ Add to cart method → Add product to transaction
//          ○ Show total method → Show total current transaction
//          ○ Checkout method → Finalize transaction, return transaction data

