// the userName is called a "key" and shaheer ali is called value
// in the syntax of {KEY : VALUE}
let user = {
  "full Name": "shaheer ali",
  age: 30,
  email: "user@gmail.com",
  password: 12345678,
  isStudent: true,
  //   sum: function () {
  //     console.log(2 + 62);
  //   },
};

// " . " this dot is an access operator because it provides and access
// console.log(user.age);
// console.log(user.userName);
// console.log(user.names.fullName);
// console.log(user.names.userName);

// console.log(`the full name of user is ${user["full Name"]}`);

// user["full Name"] = "wasim haider";
// user["telNum"] = 12345678;

// console.log(`now the edited full name of user is ${user["full Name"]}`);
// console.log(`the tel num of user is ${user["telNum"]}`);

// user["telNum"] = "";
// console.log(
//   `the tel num of user after deletion ${
//     user["telNum"] ? user["telNum"] : "is empty"
//   }`
// );

// console.log(`the age of user is ${user["age"]}`);
// console.log(`the email of user is ${user["email"]}`);
// console.log(user.sum());

for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}

// let for = {
//   for: "shaheer ali",
// };

// console.log(for.for);
