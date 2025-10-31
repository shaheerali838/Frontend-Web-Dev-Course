// function User(fullName, Contact, role) {
//   this.name = fullName;
//   this.email = Contact;
//   this.role = role;
// }

// const admin = new User("Shaheer Ali", "gmail@gmail.com", "Admin");
// const moderator = new User("Ahsan", "gmail@gmail.com", "Moderator");
// const user = new User("Hamza", "gmail@gmail.com", "User");

// console.log(admin);

// admin.greet();
// moderator.greet();
// user.greet();

// class User {
//   constructor(fullName = "Guest", Contact = "gmail@gmail.com", role = "User") {
//     this.name = fullName;
//     this.email = Contact;
//     this.role = role;
//   }

//   greet() {
//     console.log(`Hello ${this.name}, your role is ${this.role}`);
//   }
// }

// const admin = new User();
// const moderator = new User("Ahsan", "gmail@gmail.com", "Moderator");
// const user = new User("Hamza", "gmail@gmail.com", "User");

// console.log(admin);
// admin.greet();
// moderator.greet();
// user.greet();

// class animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`${this.name} is sleeping`);
//   }
// }

// class dog extends animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }
//   bark() {
//     console.log(`${this.name} is barking`);
//   }
// }

// class labrador extends dog {
//   constructor(name, age, color) {
//     super(name, age, color);
//   }
//   profile() {
//     console.log(
//       `${this.name} is a ${this.color} labrador of age ${this.age} years`
//     );
//   }
// }

// let labrador1 = new labrador("jack", 2, "white");
// console.log(labrador1);

// labrador1.profile();
// labrador1.eat();
// labrador1.sleep();
// labrador1.bark();

// let animal1 = new animal("Dog", 2);
// console.log(animal1);
// animal1.eat();
// animal1.sleep();

// class fish extends animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }
//   swim() {
//     console.log(`${this.name} is swimming`);
//   }
// }

// let fish1 = new fish("Goldfish", 1, "Gold");
// console.log(fish1);
// fish1.eat();
// fish1.sleep();
// fish1.swim();

// let fish2 = new fish("Koi", 2, "Blue");
// console.log(fish2);
// fish2.eat();
// fish2.sleep();
// fish2.swim();
