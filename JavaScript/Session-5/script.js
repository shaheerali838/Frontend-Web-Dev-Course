// for (let a = 1; a <= 100; a++) {
//   console.log(a);
// }

// let b = 10;

// while (b >= 1) {
//   console.log(b);
//   b--;
// }

// let c = 10;

// do {
//   console.log(c);
//   c--;
// } while (c > 1);

let rows = 10;
for (let a = 0; a < rows; a++) {
  let line = "";
  for (let b = 0; b < rows; b++) {
    line += b + " ";
    if (b === 5) {
      continue;
    }
  }
  console.log(line);
}
