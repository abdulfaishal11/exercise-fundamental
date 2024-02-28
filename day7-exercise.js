// 01. Create a function to check if two objects are equal 
function objects (obj1,obj2) {

    if(obj1.a === obj2.a){
        return true
    } else {
        return false
    }
}
const object1 = objects({a:2},{a:1})
console.log(object1);
const object2 = objects({a:"Hello"},{a:1})
console.log(object2);
const object3 = objects({a:1},{a:1})
console.log(object3);

// 02.  Create a function to get the intersection of two objects
function object (object1,object2) {

    for (obj in object1) {
        
    }
    for(obj2 in object2) {
        
    }
    
   
}
const intersection = object({a:1,b:3}, {a:1,c:3}) 
console.log(intersection);

// 03. Create a function to merge two array of student data and remove duplicate data
class StudentData {
    constructor (array1,array2) {
        this.aray1 = array1;
        this.array2 = array2;
    }
    result() {
        console.log(this.array1) 
    }

}


const array1 = [
    {name : "Student1", email : "studen1@gmail.com"},
    {name : "Student2", email : "studen2@gmail.com"},
    
]

const array2 = [
    {name : "Student1", email : "student1@gmai.com"},
    {name : "Student3", email : "student3@gmai.com"},
]
const student1 = new StudentData(array1, array2)
console.log(student1);

const arrayResult = array1+array2
console.log();



//Recursion
function faktorial(n) {
    if(n===0) 
    return 1
    return n*faktorial(n-1)

}
console.log(faktorial(5))
