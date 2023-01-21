//arrays in javascript
//ordered collection of items
/*
let fruits=["apple","mango","grapes"];
let mixed=[1,2,3,"stringgg",null,undefined];
console.log(mixed[0]);
// console.log(typeof fruits,fruits[2]);
*/
// let fruits = ["apple", "mango", "grapes"];
//  let mango='2332';
// console.log(fruits);
// fruits[1]="banana";
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(typeof mango);
// console.log(fruits);
// fruits.push("banana", "hello", 34973, 24.676);
// console.log(fruits);
// let poppedfruit=fruits.pop();
// console.log(poppedfruit);
//fruits.unshift("banana");   //adds fruit to the 0th index of an array 
//fruits.unshift("myfruits");
// console.log(fruits);
//fruits.shift();//removes the element at 0th index
//console.log(fruits);
//push and pop are fast than shift and unshift 

//primitive vs reference data types in javascript
/*
let num1 = 6;
let num2 = num1;
console.log("value of num1: ", num1);
console.log("value of num2: ", num2);
num1++;
console.log("value of num1: ", num1);
console.log("value of num2: ", num2);
*/
//output
/*
value of num1:  6
value of num2:  6
value of num1:  7
value of num2:  6
*/
//reference types array
/*
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1: ", array1);
console.log("array2: ", array2);
array1.push("item3");
console.log("array1: ", array1);
console.log("array2: ", array2);
*/
//output
/*
array1:  (2) ['item1', 'item2']
array2:  (2) ['item1', 'item2']
array1:  (3) ['item1', 'item2', 'item3']
array2:  (3) ['item1', 'item2', 'item3']
*/
//in non primitive data types the address is common 
/*
let array0 = ["item1", "item2"];
// let array1 = array0.slice(0); //fast as compared to others
// let array1=[].concat(array0);
// let array1 = [...array0]; //spread method
// let array1=array0.slice(0).concat(["item3","item4"]);
let onemore=["item3","item4"];
// let array1=[...array0,"item3","item4"];
let array1=[...array0,...onemore];
array0.push("item3");
console.log(array0 === array1);
console.log(array0);
console.log(array1);
*/
//for loop in an array
/*
let fruits = ["apple", "mango", "grapes", "banana"];
let fruits2=[];
for (let i = 0; i <= fruits.length - 1; i++) {
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
*/
//use of const for creating array
/*
const fruits = ["apple", "mango"];
fruits.push("banana");    //we can push elements in constant array using array methods only
// console.log(fruits);        //usually we use const for declaring array because of safety of modification in the code

let i=0;
while(i<fruits.length)
{
    console.log(fruits[i].toUpperCase());
    
}
*/
// var $_ = 'v';
// console.log($_);








