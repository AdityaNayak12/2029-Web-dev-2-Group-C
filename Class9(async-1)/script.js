let b = 20;

let a = 40;

function hello() {
  for (let i = 0; i < 1000000000; i++) {
    console.log("hello");
  }
}




setTimeout(hello , 2000)

console.log(a);

console.log(b);
