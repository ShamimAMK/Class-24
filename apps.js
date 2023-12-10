"use strict";

// //default parameter
// function sum(a, b = 0) {
//   return a + b;
// }
// // console.log(sum(2, 5));
// //value vs reference
// const student1 = {
//   name: "Mim",
//   age: 20,
// };

// // const student2 = student1 // it will copy all reference
// const student2 = { ...student1 }; // it will copy all values

// student2.name = "Rahim";

// console.log(student1);

// const arr1 = [10, 20, 30];
// const arr2 = [...arr1];
// arr2.push(40);

// console.log(arr1);
// console.log(arr2);

// //first class function,
// // 01. can be stored in a variable
// // 02. passed as agr to other func.
// // 03. returned as value from other function.
// // 04. fist class function define as call back function

// const firstclass = (a, b) => {
//   return a + b;
// };

// const otherfunc = (a, b, fn) => {
//   return fn(a, b);
// };

// console.log(otherfunc(10, 15, firstclass));

// // higher order function
// const hello = document.querySelector(".hello");

// const callback = () => {
//   document.body.style.backgroundColor = "red";
// };

// hello.addEventListener("mouseover", callback);

// function doMath(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return a + b + c + d + e;
//         };
//       };
//     };
//   };
// }
// const result = doMath(10)(12)(15)(2)(5);
// console.log(result);

// const doMath = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e; // lambda calculus

// const result = doMath(10)(12)(15)(2)(5);

// // console.log(result);

// //side effect
// function fn1(nub1, num2) {
//   return nub1 + num2;
// }

// function fn2(nub1, num2, fn1) {
//   return nub1 + num2;
// }

// // console.log(fn2(10, 20, fn1));

// function foodCutter(qty) {
//   return qty * 4;
// }
// function addFlav(pcs, fl) {
//   return pcs * fl;
// }

// function fooBlnd(qty, fl) {
//   const pcs = foodCutter(qty);
//   return addFlav(pcs, fl);
// }

// console.log(fooBlnd(14, 5));

// // call
// function greet(greetings) {
//   return `${greetings}, ${this.name}`;
// }

// const person = { name: "Mim" };
// const person2 = { name: "Rimi" };

// const text = greet.call(person, "Hi");
// console.log(text);

// //apply
// function greet(greetings, message) {
//   return `${greetings}, ${this.name}.${message}`;
// }

// const person = { name: "Mim" };
// const person2 = { name: "Rimi" };

// const agr = ["Hi", "How are you?"];

// // const text = greet.call(person, ...agr);
// // console.log(text);

// const text = greet.apply(person, agr);
// console.log(text);

// function calcAge(greetings) {
//   return `${greetings}, ${this.name}, You are ${
//     2023 - this.birthYer
//   } years old.`;
// }

// const person = { name: "Mim", birthYer: 1995 };
// const person2 = { name: "Rimi", birthYer: 2000 };

// const calcPerAge = calcAge.bind(person2);

// console.log(calcPerAge("Hello"));

// //IIFE
// (function () {
//   console.log("I am running only once");
// })();

// //closers
// function outerFunction() {
//   const myFavNum = 23;

//   function innerFunction() {
//     return myFavNum;
//   }
//   return innerFunction;
// }

// const myFunction = outerFunction();

// console.log(myFunction);

function outerFunction() {
  const num = 100;

  function innerFunction() {
    return num;
  }
  return innerFunction();
}

const myFunction = outerFunction();

console.log(myFunction);
