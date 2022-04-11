// console.log("My first node code!");

// const a = 5;
// const b = 10;

// const result = a + b;
// console.log(result);

// const add = (a,b ) =>{
//     return a+b;

// };
// console.log(add(15,10));

// //callback

// //promise

// //async await

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   bio() {
//     return `${this.name} is ${this.age} years old`;
//   }
//   cooking() {
//     return `${this.name} loves to cook pizza `;
//   }
//   hobby() {
//     return `${this.name} loves to code`;
//   }
// }
// // persons: Ashim, Ram, Sam;
// // const ashm = new Person("Ashim", 25);
// // console.log(ashm.bio());
// // console.log(ashm.cooking());
// // console.log(ashm.hobby());

// //---------Functional Programming----------------------//

// // const bio = (name, age) => {
// //   return `${name} is ${age} years old`;
// // };

// // const cooking = (name) => {
// //   return `${name} loves to cook pizza `;
// // };

// // const ashim = bio("Ashim", 25);
// // console.log(ashim);

// let timer = "------";

// const waiter = () => {
//   return new Promise((resolve, reject) => {
//     return setTimeout(() => {
//       console.log("I have been waiting long enough!");
//       timer = "waited enough";
//       resolve(timer);
//     }, 3000);
//   });
// };

// const caller = async () => {
//   const result = await waiter();
//   console.log(result);
// };
// caller();
// console.log("reached to the end ");

// ---------import the events module fore core node library
const event = require("events");
console.log(event);

//create an obj of eventemitter class by using above reference
const em = new event.EventEmitter();
em.on("ashim", () => {
  console.log("ashim event is fired, run all the code you like");
});
//subscribe to the event
em.emit("Ashim", (data) => {
  console.log(data);
});

const dt = "save this data to db";
//firing or raiseing the eventg
em.emit("Ashim", dt);
