//let keyword and constants in javascript
//declare variable with let keyword
/*let firstname = "vijay";
console.log(firstname);
const pi = 3.14;
console.log(pi);
*/

//string indexing
//let first_name="vijaymisal";
// v    i   j   a   y   m   i   s   a   l
// 0    1   2   3   4   5   6   7   8   9
/*console.log(first_name.length) //prints length of string
console.log(first_name[0]); //prints the character present at 0th index in the string
console.log(first_name[first_name.length-3]);
*/


//string methods
/*let f_name="           vIJAay";
console.log(f_name.length);
console.log(f_name);
let l_name="misal";
f_name=f_name.trim();
console.log(f_name);
console.log(f_name.length);
f_name=f_name.toLowerCase();
console.log(f_name);
console.log(f_name.toUpperCase())
console.log(f_name);
*/
/*
let v = "vijay";
let newstring = v.slice(0, 4);
console.log(newstring);
*/
//continue from 01:09

//primitive data types in javascript
//string
//booleans
//number 2, 3, 4.5
//undefined
//null
//BigInt
//Symbol
/*let age=34;
let namee="vijay";
console.log(typeof age);
console.log(typeof namee);
age=age+"";
console.log(typeof age);
*/
/*
let age=18;
age=String(age);
console.log(typeof age);
*/
//concatenation of two strings
/*
let string1 = "18";
let string2 = "2";
let fullname= +string1+ +string2;
console.log(fullname);
*/
//template string
/*
let age=22;
let fname="Vijay";
//"my name is Vijay and my age is 22"
// let aboutme="My name is "+fname+ " and my age is "+age;
let aboutme=`My name is ${fname} and my age is ${age}]`
console.log(aboutme);
*/
//undefined type of variables
/*
let f;
console.log(typeof f);
f="misal";
console.log(typeof f,f);
*/
//null type of varables
/*
let myvariable=null;
console.log(myvariable);
myvariable="vijay";
console.log(myvariable, typeof myvariable);
console.log(typeof null); //it will print object as it is bug in javascript..
*/
//bigint
/*
let mynum = BigInt(12);
console.log(mynum);
let samemynum = 123n;
console.log(mynum + samemynum);
*/
//boolean and comparison operators in javascript
/*
let num1 = 47;
let num2 = 47;
// console.log(num1==num2);

// == vs ===
// console.log(num1==num2);
console.log(num1!=num2);
*/
//truthy and falsy values in javascript
//falsy values
/*
false
""
null
undefined
0
*/
/*
let firstname = ""; //falsy value firstname=null; firstname=0;
//let firstname="vijay"; //falsy value
if (firstname) {
    console.log(firstname);
}
else {
    console.log(`firstname is empty`);
}
*/
//if else condition
/*
let age = 18;
if (age >= 18) {
    console.log(`user can play game`);
}
else {
    console.log(`user can't play game`);
}

let num = 14;
if (num % 2 == 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
*/
//ternary operator
/*
let age = 14;
let drink;
if (age >= 5) {
    drink = "coffee";
}
else {
    drink = "milk";
}
console.log(drink);
*/
/*
let age = 8;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);
*/
//and or operator
/*
let firstname = "vijay";
let age = 22;

if (firstname[0] === 'v' && age > 18) {
    console.log(`your name starts with v and age is above 18`);
}
else {
    console.log(`inside else`);
}
if (firstname[0] === 'x' || age > 136) {
    console.log("one condition is true");

}
else {
    console.log("both conditions are false");
}
*/

