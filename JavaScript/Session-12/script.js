// let sym1 = Symbol("Name"); // "" are called identifiers or descriptions
// let sym2 = Symbol();

// console.log(sym1.description);

// let sym1 = Symbol("name");

// let user = {
//   [sym1]: "John Doe",
//   age: 30,
// };

// console.log(user[sym1]);

// let user = {
//   firstName: "John",
//   age: 30,
// };
// user.secondName = "Smith";

// const fullName = Symbol("fullName");
// user[fullName];

// console.log(user[fullName]);

// for (let key in user) {
//   console.log(key);
// }

// global symbols
// let id1 = Symbol.keyFor("id");
// let id2 = Symbol.keyFor("id");

// let id2 = Symbol("id");

// console.log(id2 === id1);

let user = {
  firstName: "John",
  age: 30,
};
user.secondName = "Smith";

const fullName = Symbol("fullName"); // this symbol is use to store fullname
const hello = Symbol("fullName");
user[fullName] = "shaheer ali";
user[hello] = "shaheer ali";

// console.log(fullName.description);
// console.log(hello.description);

console.log(Object.getOwnPropertySymbols(user));

// console.log(user);

// console.log(JSON.stringify(user));
