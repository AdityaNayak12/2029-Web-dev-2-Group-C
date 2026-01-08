// basic coin toss

// heads - success - resolved
// tails - faliure - rejection


const promise1 = new Promise(function(resolve , reject){
    const isHeads = Math.random()>0.5

    if(isHeads){
        // promise will resolve
        resolve('We got heads we won the toss')
    }
    else{
        //promise will be rejected
        reject('We got tails we lost the toss')
    }
})


console.log(promise1)
