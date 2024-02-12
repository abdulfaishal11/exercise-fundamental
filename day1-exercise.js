// 01 - Find area of rectangle:

let length = 5;
let width = 3;
let rectangleArea = (length * width);
console.log(rectangleArea);

// 02 - Find perimeter of rectangle:

let lengthOfRetangle  = 5;
let widthOfRetangle = 3;
let perimeterOfRetangle = (lengthOfRetangle*2 + widthOfRetangle*2);
console.log(perimeterOfRetangle);

// 03 - Find diameter, circumference, and area of a circle:
const radius = 5;
const phi = 3.14159

const diameter = (radius * 2);
console.log(diameter);

const circumference = (2 * phi * radius);
console.log(circumference);

const area = (phi * radius**2);
console.log(area);

// 04 - Find angles of triangles if two angles are given:
const angles = {
    angles1 : 80,
    angles2 : 65,
    angles3 : "",
};
const anglesOfTriangle = 180
angles.angles3 = anglesOfTriangle - (angles.angles1 + angles.angles2) ; 
console.log(angles.angles3);

// 05 - Get difference between dates in days:
const day1 = new Date("2024-01-20");
console.log(day1);


const day2 = new Date("2024-01-22");
console.log(day2);


const differentDays = (day2 - day1); // 1 hari --> 24*3600*1000 = 86400000 millisecond
console.log(differentDays / 86400000 + " hari");

// 06 - Convert days to years, months, and days :

const days = 400

let oneMonth = 30;
let oneYear = 365;
let convertYear = days/oneYear;
let convertMonth = (days - oneYear) / oneMonth
let convertDay =  (days - oneYear <=30 ? days - oneYear : (days-oneYear) - 30); 


// console.log(Math.round(convertYear))
// console.log(Math.abs(Math.round(convertMonth)))
// console.log(Math.abs(convertDay))

console.log (`${Math.round(convertYear)} tahun , ${Math.round(convertMonth)} bulan, ${Math.abs(convertDay)} hari`)

 


















