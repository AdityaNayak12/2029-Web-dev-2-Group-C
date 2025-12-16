console.log('Start')


function hello() {
  for (let i = 0; i < 10; i++) {
    console.log("hello");
  }
}

function bye(){
    for (let i = 0; i < 10; i++) {
        console.log("Bye");
      }  
}
// hello() // Synchronous
setTimeout(hello, 4000);
setTimeout(bye , 2000);


console.log("End")


