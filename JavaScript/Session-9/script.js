// function yes() {
//   document.body.style.backgroundColor = "orange";
// }

// Select the first element with the class "orange"
// let btn = document.body.querySelector(".orange");

// Add the event listener to the selected element
// btn.onclick = yes;
// var a = outer();
// console.log(a);

// console.log(message);

// function parent() {
//   iceCream = "yes this var variable is running";

//   function child1() {
//     let iceCream2 = "this is secret";
//     console.log(iceCream);
//   }
//   function child2() {
//     // console.log(iceCream2);
//     console.log(iceCream);
//   }
// }

// let child = parent();
// child();

// parent();

function yes(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.body.querySelector(".orange").onclick = yes("orange");
document.body.querySelector(".blue").onclick = yes("blue");
document.body.querySelector(".green").onclick = yes("green");
// document.body.querySelector(".orange").onclick = yes("blue");
// document.body.querySelector(".orange").onclick = yes("blue");
// document.body.querySelector(".orange").onclick = yes("blue");
// document.body.querySelector(".orange").onclick = yes("blue");
// document.body.querySelector(".orange").onclick = yes("blue");
