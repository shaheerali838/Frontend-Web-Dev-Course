//? explicit conversions because everything is done manualy
// let a = Number("1");
// let b = Boolean("1");
// let c = String("1");

// let a = Number(1);
// let b = Boolean(1);
// let c = String(1);

// let a = Number(false);
// let b = Boolean(false);
// let c = String(false);

// console.log("a " + a, typeof a);
// console.log("b " + b, typeof b);
// console.log("c " + c, typeof c);

//? implicit because conversion will happen automatically
// let a = "5" + "5"; // 55 coz concatenation //always if there is addition and atleast 1 string is available
// let b = 5 + 5; // 10 coz of addition
// let c = 5 % "5"; // implicitly converted the string to number

// console.log("a " + a, typeof a);
// console.log("b " + b, typeof b);
// console.log("c " + c, typeof c);

// let a = Number(" ");
// let b = Boolean(" ");
// let c = String(" ");

// console.log("a " + a, typeof a);
// console.log("b " + b, typeof b);
// console.log("c " + c, typeof c);

// console.log(
//   "is 1 in a string = to true:",
//   ":without type checking:",
//   1 == true
// );
// console.log("is 1 in a string = to true:", ":with type checking:", 1 === true);
// console.log("b " + b, typeof b);
// console.log("c " + c, typeof c);

//? intro to operators / operands
// so the sign/symbol which is performing any calculation between any two or more digits is called operator and the digits on which the calculation is happening are called operands

//? Arithmetic operators

//addition +
// console.log(9 + 1); // 10

//subtraction -
// console.log(9 - 1); //8

//division /
// console.log(9 / 1); // 9

//multiplication *
// console.log(9 * 2); // 18

//modulus %
// console.log(9 % 1); // 0

//exponentiation **
// console.log(9 ** 2); // square OR power = 81

//? increment ++ ..... it adds value of 1

// let counter = 10;

// counter++; // 1 digit added so it bacame 11
// console.log(counter); // 11

//? decrement -- ..... it subtracts value of 1

// --counter; //11
// console.log(counter); // 10

//? assignmet operators =
// let counter = 10;

// counter *= 5; // counter = 10
// console.log(counter); // 50

// counter /= 5; // counter = 50
// console.log(counter); // 10

// counter -= 5; // counter = 10
// console.log(counter); // 5

// counter += 5; // counter = 5
// console.log(counter); // 10

// counter %= 5; // counter = 10
// console.log(counter); // 0

//? comparison
// 🔸 9. Comparison Operators
// it compare two operands with each other depending on the requirement it returns or tell us that the comparison is correct or not if not it returns a false value else true
// • == equal (performs type coercion).
// console.log(5 == "5"); // is 5 equal to five?... it will say yes
// console.log(5 == 5); // is 5 equal to 5?... it will say yes

// • === strict equal (no coercion, preferred).
// console.log(5 === "5"); // is 5 equal to five and also check if they are from same data type?... it will say no you are asking if number five is equal to its spelling;

// • != not equal, !== strict not equal. (   !   )
// console.log(5 != "5"); // is 5 equal to five?... it will say yes
// console.log(5 != 5); // is 5 equal to 5?... it will say yes

// console.log(5 !== "5"); // is 5 equal to five and also check if they are from same data type?... it will say no you are asking if number five is equal to its spelling;

// • > greater than, < less than, >= greater than or eqaul to, <= less than or eqaul to for numeric comparisons.
// console.log(5 >= 5);
//! • Example: 5 == "5" → true, but 5 === "5" → false.

//? 🔸 10. Logical Operators

// • && (AND) → true if both conditions are true.

// console.log(5 == 5 && 5 === 5 && "5" == "5" && "5" === "5" && "5" == 5); // returns true coz all values are correct
// console.log(5 == 5 && 5 === 5 && "5" == "5" && "5" === "5" && "5" == 4); // returns false coz atleast 1 value is false

// • || (OR) → true if at least one condition is true.
// console.log(5 == 5 || 5 === 5 || "5" == "5" || "5" === "5" || "5" == 5); // returns true

// console.log(5 == 5 || 5 === 5 || "5" == "5" || "5" === "5" || "5" == 4); // returns true coz atleast 1 or more value is correct

// • ! (NOT) → reverses the boolean value.
// let a = 5 == 5 || 5 === 5 || "5" == "5" || "5" === "5" || "5" == 5; // returns true coz atleast 1 or more value is correct
// console.log(!a);
// let b = 5 == 5 && 5 === 5 && "5" == "5" && "5" === "5" && "5" == 4; // returns false coz atleast 1 value is false
// console.log(!b);

//! • Example: true && false → false.

//? 🔸 11. Advanced Operators
// • Nullish Coalescing (??) → returns first defined/true value.
let usernull = null;
let userundefined = undefined;
let user = "Shaheer";

// let user = "yes i am logged in";
console.log(usernull ?? userundefined ?? user ?? "guest"); // "Shaheer".
