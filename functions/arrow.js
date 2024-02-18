// console.log("hellow");
//  console.log(add(2,3));

// function add(x,y){
//     return x + y;
// }

//setTimeout( ()=> console.log("hello"),3000);

//use arrow fun to square array numbers

let number = [1,2,3,4,5];

const sqaures = number.map((elements)=>Math.pow(elements,2));
console.log(sqaures);

const cubes = number.map((element)=>Math.pow(element,3));
console.log(cubes);

const evennum = number.filter((element)=>element%2==0);
console.log(evennum);
 
const total = number.reduce((x,y)=>x+y);
console.log(total);
