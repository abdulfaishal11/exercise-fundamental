


// const ArrayWrapper = function(nums) {
//     this.nums = nums
//     const flat = (nums.flat());
//     let str = 0

   
//     for(i=0 ; i<=flat.length-1 ; i++) {
//     str+= flat[i]
 
//     }
//     console.log(str);
   
// };


// ArrayWrapper.prototype.valueOf = function() {
 

// }


// ArrayWrapper.prototype.toString = function() {
   
//     return "[" + this.nums.join() + "]"

// }

// const arr1 = ArrayWrapper([[1,2],[3,4]]);


// console.log(arr1);

// let ary = [1,2,3,4]

//   let ar = []
//   let str = 0


//02. (2695. array wrapper)
  class ArrayWrapper {

    constructor(nums) {
        this.nums = nums;
        console.log(this.nums);
        this.nums = nums.reduce((a, b) => a + b);
        console.log(this.nums);
    }

    valueOf() {
        return this.nums.reduce((a, b) => a + b, 0);
    }

    toString() {
        return `[${this.nums}]`;
    }
}

const obj = new ArrayWrapper([23,98,42,70]);
console.log(String(obj)); // "[23,98,42,70]"


//03 (561. array partition)
let arrayPairSum = function(nums) {
    const sort = nums.sort()
    let arr = []
    for (i=0 ; i<=sort.length-1 ; i++) {
        console.log(sort);
        if(sort.length % 2 === 0 ) {
            arr.push(sort[i])
        } 
        console.log(arr);
    }
};

const array = arrayPairSum([1,4,3,2])
console.log(array);

//04. (905 - Sort Array by Parity)

// let sortArrayByParity = function(numbers) {
    
//         let arr = [];
//         let odd = [];
//         let even = []
//         const filter = numbers.filter((e,i) => {
//             console.log(i);
//             if(i%2 !== 1 || i%2===1) {
//                 odd.push(e)
//             }else {
//                 even.push(e)
//             }
//         })

//         console.log(odd);
//         console.log(even);
//         console.log(arr);
//         if (odd % 2 === 0) {
//             arr =odd.concat(even)
//         } else {
//             arr = even.concat(odd)
//         }
      
//         return arr     
    
// };
// const sortArray = sortArrayByParity([4,5])
// console.log(sortArray);


// // var sortArrayByParity = function(nums) {
//     let arr = [];
//     let even = [];
//     let odd = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             even.push(nums[i]);
//         } else {
//             odd.push(nums[i]);
//         }
//     }
//     arr = even.concat(odd);
//     return arr;
// };

// 05. 

class Fibonacci {
    constructor(angka) {
        this.angka = angka
    }

hasil(){
    let result = []
    let fs = 0;
    let fs1 = 0;
    let fs2= 1;

    for ( let i=0 ; i<this.angka; i++){
        result.push(fs);
        fs = fs1 + fs2;
        fs2 = fs1
        fs1 = fs
    }
    return result;

    }
}

const fibonacci = new Fibonacci(5)
console.log(fibonacci.hasil())




//06. - 2634 - filter elements from array

let filter = function(arr, fn) {
    let arrs = []
    for(i=0 ; i<arr.length ; i++) {
        if(arr[i]> 10 ) {
        arrs.push(arr[i])
        if (fn(arr[i], i)) {
            arrs.push(arr[i])
        } 
        }
       
    }
    return arrs
};

const arrays = filter ([1,2,3])
console.log(arrays);

//07. - 509 - Fibbonaci Number

    let n = 4
    let fs = 0;
    let fs1 = 0;
    let fs2= 1;

    for ( let i=0 ; i<n; i++){
        fs = fs1 + fs2;
        fs2 = fs1
        fs1 = fs
    }
    console.log(fs1);

    //08 - 1470 - Shuffle the array 

    let shuffle = function(nums, n) {
        let arr = []
        let arr2 = []
        for(let i = 0 ; i<nums.length ; i++) {
            if(i < n) {
               arr.push(nums[i])
            } else {
               arr2.push(nums[i])
            }
          
        }
      for (const shuf of arr) {
        
      }
    
        console.log(arr);
        console.log(arr2);
    };
 
    const ret = shuffle([1,2,3,4,4,3,2,1],4)
    

    var shuffles = function(nums, n) {
    let p1 = 0
    let p2 = n  //conveniently n is the index pointer2 should be at
    const result = []
    while(p1<n){
        result.push(nums[p1])
        result.push(nums[p2])
        p1++
        p2++
    }
    return result
};
const shu = shuffles([1,1,2,2],2)
console.log(shu);

//09. -2635 - Apply Transform Over Each Element in Array
// let map = function(arr, fn) {
//     let arra = []
//   let as = arr.forEach((a) => {
//     let b = a+1 
//     arra.push(b)
//   })
//   arra 
// };
// map([1,2,3],12)

//solved : 
// var map = function(arr, fn) {
//     arrs = []
//  for (let i =0; i<arr.length; i++){
//      arrs[i] = fn (arr[i] , i)
//  }
 
//  return arrs
//  };
//  console.log (map([1,2,3]))


//10 - 2666 - Alow One Function Cell   

let once = function(fn) {
    
   
    return function(...args){
        
    }
};
const fn = ("1+2+3")
once(fn)


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

//11 - 2703 - Return Length of Arguments Passed
let argumentsLength = function(args) {
    let length = args.length
    return length
};
const length = argumentsLength([5])
console.log(length);

//12 - 561. Array Partition
let arrayPair = function(nums) {
    const sort = nums.sort()
    console.log(sort);

    const filter = sort.filter ((e,i) => 
        !(i%2)) //yang bukan bilangan genap
    
    console.log(filter);
    
    const reduce = filter.reduce((a,b)=> a+b,0)
    
    return reduce
 
  
  };
  const arraypairs = arrayPair([1,4,3,2])
  console.log(arraypairs);

  //13 - 2724 - Sort By //solved
  var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b))
};

    //14 
    var isEmpty = function(objek) {

        if (Array.isArray(objek)){

            return objek.length === 1;

        } else if (typeof objek === 'object'){

            return Object.keys(objek).length === 0;

        }

        else{

            return false

        }

    };
    const empty = isEmpty([])
    console.log(empty);

    //15  - 2715 - timeout cancellation 
    let cancellable = function(fn, args, t) {

        let cleartime = timeOut(() => 
        fn(args),t);
        let cancel = () =>  
        clearTime(cancellation);
        
        return cancellation
    };
   
    
      