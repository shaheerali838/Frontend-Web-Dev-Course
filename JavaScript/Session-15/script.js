// let user = {
//   name: "Shaheer",
//   profile: {
//     contact: {
//       email: "shaheer@example.com",
//     },
//     address: { city: "Dhaka" },
//   },
// };

// const { use } = require("react");

// console.log(user?.profile?.address?.city);

// nullish coalescing operator (??)
// let user = {
//   name: "Shaheer",
//   profile: {
//     contact: {
//       email: "shaheer@example.com",
//     },
//   },
// };

// console.log(user?.profile?.address?.city ?? "City is not defined");

// let score = 0;
// let user = {
//   score,
// };

// console.log(user.score || "Score is not defined");
// console.log(user.score ?? "Score is not defined");

// Advanced Object Concepts

// let user = {
//   name: "Shaheer",
//   profile: {
//     contact: {
//       email: "shaheer@example.com",
//     },
//   },
// };

// Object.freeze(user);
// user.name = "Kamran";
// user.email = 123;
// console.log(user);

// let user = {
//   name: "Shaheer",
//   profile: {
//     contact: {
//       email: "shaheer@example.com",
//     },
//   },
// };

// Object.seal(user);
// user.email = 123;
// user.name = "Kamran";
// console.log(user);

// let user = {
//   name: "Shaheer",
// };

// Object.preventExtensions(user);
// user.firstname = "Kamran";
// user.name = "Kamran";
// console.log(user);

// let user1 = {};

// Object.defineProperty(user1, "fName", {
//   value: "Shaheer",
//   writable: false,
// });

// console.log(user1.fName);

// user1.fName = "Kamran";
// console.log(user1.fName);

let key;

let user = {
  [key]: "shaheer@example.com",
};

console.log(user[key]);
