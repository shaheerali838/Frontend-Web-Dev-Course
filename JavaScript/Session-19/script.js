// function getData(data, cb) {
//   setTimeout(() => {
//     console.log(data);
//     cb();
//   }, 2000);
// }

// nesting

// let age = 18;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("You are old");
//   } else {
//     console.log("You are young");
//   }
// } else {
//   console.log("You are teen");
// }

// CAllBack Hell
// console.log("Fetching data 4...");
// getData(4, () => {
//   console.log("Fetching data 5...");
//   getData(5, () => {
//     console.log("Fetching data 6...");
//     getData(6, () => {
//       console.log("Fetching data 7...");
//       getData(7, () => {
//         console.log("Fetching data 8...");
//         getData(8, () => {
//           console.log("Fetching data 9...");
//           getData(9, () => {
//             console.log("Fetching data 10...");
//             getData(10, () => {});
//           });
//         });
//       });
//     });
//   });
// });

// Promises

// function getData(data, cb) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (data) {
//         console.log("data", data);
//         resolve("Success");
//       } else {
//         reject("NO DATA");
//       }
//       if (cb) {
//         cb();
//       }
//     }, 2000);
//   });
// }

// getData(4);
// getData(5);
// getData(6);
// getData(7);
// getData(8);
// getData(9);
// getData(10);

// console.log("Fetching Data 4...");
// getData(4)
//   .then(() => {
//     console.log("Fetching Data 5...");
//     return getData(5);
//   })
//   .then(() => {
//     console.log("Fetching Data 6...");
//     return getData(6);
//   })
//   .then(() => {
//     console.log("Fetching Data 7...");
//     return getData(7);
//   })
//   .then(() => {
//     console.log("Fetching Data 8...");
//     return getData(8);
//   })
//   .then(() => {
//     console.log("Fetching Data 9...");
//     return getData(9);
//   })
//   .then(() => {
//     console.log("Fetching Data 10...");
//     return getData(10);
//   });

function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        console.log("data", data);
        resolve("Success");
      } else {
        reject("NO DATA");
      }
    }, 2000);
  });
}

// await getData(1);
// await getData(2);
// await getData(3);
// await getData(4);
// await getData(5);
async function getAllData() {
  console.log("Fetching Data 1...");
  await getData(1);
  console.log("Fetching Data 2...");
  await getData(2);
  console.log("Fetching Data 3...");
  await getData(3);
  console.log("Fetching Data 4...");
  await getData(4);
  console.log("Fetching Data 5...");
  await getData(5);
  console.log("Fetching Data 6...");
  await getData(6);
  console.log("Finished");
}
// getAllData();

// IIFE : Immediately Invoked Function Expression
(async function () {
  console.log("Fetching Data 1...");
  await getData(1);
  console.log("Fetching Data 2...");
  await getData(2);
  console.log("Fetching Data 3...");
  await getData(3);
  console.log("Fetching Data 4...");
  await getData(4);
  console.log("Fetching Data 5...");
  await getData(5);
  console.log("Fetching Data 6...");
  await getData(6);
  console.log("Finished");
})();
