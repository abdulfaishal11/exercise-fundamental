// 01. Create a function to check if two objects are equal
//      ● Example
//          ○ Input : { a: 2 } & { a: 1 }
//          ○ Output: false
//      ● Example
//          ○ Input : { a: “Hello” } & { a: 1 }
//          ○ Output: false
//      ● Example
//          ○ Input : { a: 1 } & { a: 1 }
//          ○ Output: true 

// function obj(obj1,obj2) {
//     if(obj1.a !== obj2.a) {
//         return false
//     } else {
//         return true
//     }
// }
// const object1 = obj({a:2} , {a:1})
// console.log(object1);

// const object2 = obj({a:"hello"} , {a:1})
// console.log(object2);

// const object3 = obj({a:1}, {a:1})
// console.log(object3);

// Versi lecture :
function areObjectEqual (obj1,obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2) {
        return false
    }

    for(const key of keys1) {
        if(obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}
const arg1 = {a: "1"}
const arg2 = {a: "1"}
console.log(areObjectEqual(arg1,arg2))
//02. Create a function to get the intersection of two objects

function objects(object1 , object2) {
    const results = {}
    for (let key in object1) {
        if (object2.hasOwnProperty(key) && object1[key] === object2[key]) {
          results[key] = object1[key];
        }
      }
      return results;
    }
    
const object1 = {a:1 , b:2};
const object12 = {a:1 , c:3};
const intersects = objects(object1,object12)
console.log(intersects);

//cara lecture :
const intersection = (a1,a2) => {
    const duplicate = {}

    for(let key in a1) {
        console.log(key);
        if(a1[key] === a2[key]) {
            duplicate[key] === a1[key]
        }
    }
    return duplicate
}
const ar1 = {a:1 , b:2}
const ar2 = {a:1, c:3}
console.log(intersection(ar1,ar2))
//03. Create a function to merge two array of student data and remove duplicate data


// const arr3 = [...arr1,...arr2]

// const merge = function(arr1, arr2) {
//     const results = {}
//     for(let key in arr1 ){
//         if (arr2.hasOwnProperty(key) && key[key] === arr2[key]) {
//             results[key] = arr1[key]
//         }
//     }
//     return results
// }
// console.log(merge());


// cara lecture : 
const removeduplicate = (arr1,arr2) => {
    const combineArray = [...arr1, ...arr2]
    console.log(combineArray);

    const temp = []
    for ( let i = 0 ; i<combineArray.length; i++) {
        //mereturn array baru
        const duplicateValues = temp.filter((val) => {
            return val.email === combineArray[i].email;
        })
        console.log(duplicateValues);
        console.log(combineArray[i]);

        if(!duplicateValues.length) {
            temp.push(combineArray[i])
        }
    }
    return temp
}

const arr1 = [
    {name: "student1", email: "student1@gmail.com"},
    {name: "student2", email: "student2@gmail.com"},
]

const arr2 = [
    {name: "student1", email: "student1@gmail.com"},
    {name: "student3", email: "student3@gmail.com"},
]

console.log(removeduplicate(arr1,arr2))


//04. Create a function that can accept input as an array of objects and switch all values into property and property into value

// function change (i) {
//     const changes = {};

//     for(const key in i) {
//         if(Object.hasOwnProperty.call(i,key)) {
//             const value = i[key];
//             changes [value] = key;
//         }
//     }
//     return changes
// }
// const input = {name : "David", age: 20}
// const reverse = change(input)
// console.log(reverse);

//cara lecture :
    const switchValueToKey = (argu) => {
        console.log(argu)
        const result = []

        argu.forEach(item=> {
            let temp = {}
        
        for (let key in item) {
            console.log(key);
            temp[item[key]] = key
        }
        result.push(temp)
        });

        return result

    }

    const argu = [{name: "david", age: 20}]
    const result = switchValueToKey(argu)
    console.log(result);




    //05. Create a function to find a factorial number using recursion
    const factorial = function (n) {
        if(n === 0 ) {
            return 1
        } else {
            return n * factorial(n-1)
        }
    }

    console.log(factorial(5))
    






