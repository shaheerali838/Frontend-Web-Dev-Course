let user = {
  fname: "john",
  age: 30,

  greeting() {
    console.log(
      `Hello, my name is ${this.fname} and I'm ${this.age} years old.`
    );
    this.fname = "Shaheer Ali";
    console.log(
      `Hello, my name is ${this.fname} and I'm ${this.age} years old.`
    );
  },
};

// function a() {
//   console.log("hello world");
// }

// a();

// let greet = (user.greet = greet);

user.greeting();

// let a = () => {
//   console.log(this);
// };
// a();
// console.log(this);

// console.log(window);
