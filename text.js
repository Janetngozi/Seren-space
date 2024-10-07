///first

// if (true) {
//   var myHeight = 20;
// }
// console.log(myHeight);

// // 1. It worked because var is a global variable and can work anywhere

//second
// if (true) {
//   let myHeight = 20;
// }
// console.log(myHeight);

// // 2. It didn't work because const is a local variable in the block scope and it can't work outside it

// third

// if (true) {
//   const myHeight = 20;
// }
// console.log(myHeight);
//3. It didn't work because const is a local variable in the block scope and it can't work outside it

//fourth

// let myHeight = 20;
// console.log(myHeight);
// let myHeight = 25;
// console.log(myHeight);

//when I consoled it at first, it worked but the second brought out error cos I can't assign two values using the same let variable

// fifth
// const myHeight = 20;
// console.log(myHeight);
// const myHeight = 25;
// console.log(myHeight);

//when I consoled it at first, it worked but the second brought out error cos I can't assign two values using the same let variable

// var myHeight = 20;
// console.log(myHeight);
// var myHeight = 25;
// console.log(myHeight);

// //var worked because it is a global variable and can be used multiple times

// var cook = 48;
// console.log(cook);

// let cook = 49;
// console.log(cook);

// const cook = 46;
// console.log(cook);

// //the three of them are showing error because the values are repeated

const a = {
  name: "Codewitheyezyc",
  printName() {
    console.log(`My name is ${this.name}`);
  },
};
a.printName(); // My name is Codewitheyezyc

const b = {
  name: "Janet",
};
const printB = a.printName.bind(b);
printB(); // My name is Janet
