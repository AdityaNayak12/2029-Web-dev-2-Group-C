const fileSystem = require("fs");

console.log("start");
const readFilePromise1 = fileSystem.promises.readFile("f1.txt");
const readFilePromise2 = fileSystem.promises.readFile("f2.txt");
const readFilePromise3 = fileSystem.promises.readFile("f3.txt");

readFilePromise1.then(function (data) {
  console.log("This is file 1 data-> " + data);
});

readFilePromise2.then(function (data) {
  console.log("This is file 2 data-> " + data);
});

readFilePromise3.then(function (data) {
  console.log("This is file 3 data-> " + data);
});

readFilePromise1.catch(function (error) {
  console.log("Cannot read file " + error);
});

console.log("End");
