// let user = ["Shaheer Ali", 22, "Admin"];

// let [firstElement, middleElement, lastElement] = user;

// console.log(
//   `Hello my name is ${firstElement} and i am ${lastElement} here ${middleElement}`
// );

// let user = {
//   fName: "Shaheer Ali",
//   age: 22,
//   role: "Admin",
// };

// let { fName: fn, role: r, age: a } = user;
// console.log(fn, "of age", a, "of role", r);

// Spread Operator

// let user = {
//   fName: "Shaheer Ali",
//   age: 22,
//   role: "Admin",
// };

// let cloneUser = {
//   ...user,
//   fName: "Shaheer Ali",
//   age: 22,
//   role: "Admin",
// };

// Rest Operator

// function sum(fname = "guest", lname, ...rest) {
//   console.log(fname);
//   console.log(lname);
//   console.log(rest);
//   let sum = 0;
//   for (let i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }
//   console.log(sum);
// }

// sum("ali", "shaheer", 10, 10, 10, 10, 10);

// const array1 = [1, 2];
// const array2 = [3, 4, [5, 6]];
// const newArray = array1.concat(array2); // Concatenates array2 to array1

// let newArray = [...array1, ...array2];

// console.log(newArray);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [...arr1, ...arr2];
// console.log(result);
//
// let user1 = {
//   fName1: "Shaheer Ali",
//   age1: 22,
//   role1: "Admin",
// };

// let user2 = {
//   fName2: "ahmad ali",
//   age2: 25,
//   role2: "moderator",
// };

// let cloneUser = {
//   ...user1,
//   ...user2,
// };

// console.log(cloneUser);
