let complete = true;

let promise = new Promise((resolve, reject) => {});

setInterval(() => {
  console.log(`log ${Math.random()}`);
}, 5000);
promise

  .then((data) => {
    console.log(`${data}`);
  })
  .then((data) => {
    console.log(`${data}`);
  })
  .catch((err) => {
    console.log(`promise rejected with ${err}`);
  })
  .finally(() => {
    console.log("promise completed");
  });

console.log(promise);
