const p1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Promise Resolved");
  }, 40000);
});

const p2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Promise 2 Resolved");
  }, 60000);
});

// p1.then(function(result){
//   console.log(result)
// })

async function sayHello() {
  console.log("Scaler");

  const result1 = await p1; // 0th sec
  console.log(result1);
  const result2 = await p2; // 15 secs
  console.log(result2);

  console.log("create Impact");
}

function sayBye() {
  console.log("Byeeee!!");
}

sayHello();

sayBye();
