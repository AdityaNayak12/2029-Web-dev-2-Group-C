// Read operations

const fileSystem = require('fs')

const data1 = fileSystem.readFileSync('f1.txt')
const data2 = fileSystem.readFileSync('f2.txt')
const data3 = fileSystem.readFileSync('f3.txt')


console.log("this is f1 data-> "+ data1)
console.log("this is f2 data-> "+ data2)
console.log("this is f3 data-> "+ data3)

