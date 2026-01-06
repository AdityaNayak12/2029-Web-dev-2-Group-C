const fileSystem = require("fs");
console.log("Start");


// Read operations (synchronusly)
// const data1 = fileSystem.readFileSync('f1.txt')
// const data2 = fileSystem.readFileSync('f2.txt')
// const data3 = fileSystem.readFileSync('f3.txt')

// console.log("this is f1 data-> "+ data1)
// console.log("this is f2 data-> "+ data2)
// console.log("this is f3 data-> "+ data3)

// Read operations (asynchronusly)

fileSystem.readFile("f1.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file", err);
  }

  console.log("This is file 1 data -> " + data);
});

fileSystem.readFile("f2.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file", err);
  }

  console.log("This is file 2 data -> " + data);
});

fileSystem.readFile("f3.txt", function (err, data) {
  if (err) {
    console.log("Cannot read file", err);
  }

  console.log("This is file 3 data -> " + data);
});

console.log("End");
