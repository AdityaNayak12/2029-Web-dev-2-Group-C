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

// then and catch


promise1.then(function(result){
   console.log("then -> "+ result)
})

promise1.catch(function(err){
    console.log('catch -> ' + err)
})

// settle
promise1.finally(function(){
    console.log('Coin toss done')
})