const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const HigerBMI = BMIMark > BMIJohn ;

console.log( BMIMark , BMIJohn , HigerBMI);