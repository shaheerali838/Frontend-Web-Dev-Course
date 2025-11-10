// let arrName1 = [1, 2, 3];

// console.log(arrName);
// console.log(arrName[1]);

// arrName[0] = "Hamza";

// console.log(arrName);

// let arrName2 = ["Shaheer Ali", 20, true];

// console.log(arrName2);

// let product1 = "this";
// let product2 = "that";
// let product3 = "phone";

// let products = ["this", "that", "Phone"];
// products[0] = "car";
// console.log(products);
// console.log(products[2]);

// let products = ["this", "that", "Phone"];
// console.log(products.length);

// let a = products.length - 1;
// console.log(products[a]);

// let arrName1 = [1, 2, 3, "shaheer ali"];
// arrName1.push("Shaheer Ali");
// console.log(arrName1);

// arrName1.pop();

// console.log(arrName1);

// arrName1.shift();

// console.log(arrName1);

// let a = arrName1.indexOf("shaheer ali");

// console.log(a);

// function add(num1, num2, cb) {
//   let result = num1 + num2;
//   return cb(result);
// }

// add(2, 3, (val) => {
//   console.log(val);
// });

// add(4, 5, function cb(result) {
//   console.log(result);
// });

// let nums = [0, 1, 2, 3, 4, 5];

// let editedNums = nums.slice(0, 3); // the ending parameter is exclusive.

// console.log(editedNums);

// console.log(nums);

// let editedNums = nums.splice(0, 3); // this is an inclusive method doesnt ignore anything.

// console.log(editedNums);
// console.log(nums);

// let nums = [0, 1, 2, 3, 4, 5];

// console.log(
//   nums.reduce((prev, nextNum) => {
//     return prev + nextNum;
//   })
// );

// let persons = ["Shaheer", "ahmad", "sanan", "hamza"];

// let result1 = persons.forEach((name) => {
//   console.log(name, "ali");
//   return name + "ali"; // doesnt return anything
// });

// console.log(result1);

// let result2 = persons.map((name) => {
//   console.log(name, "ali");
//   return name + " ali"; // doesnt return anything
// });

// console.log(result2);

// function a() {// will call the function and ask everyone the same data again and again
// name
// father
// address
// }

// let persons = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// let result = persons.filter((val) => {
//   if (val >= 4 && val % 2 == 0) {
//     return val;
//   }
// });

// console.log(result);

let persons = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(persons.find((val) => val === 6));
