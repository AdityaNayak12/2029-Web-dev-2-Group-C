// Promise Combinators ->
// Promise.all
// Promise.allSettled

// Promise.race
// Promise.any

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
  });
}

function fetchUserPosts(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });
}

function fetchUserComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 1;
      if (success) {
        resolve(["Nice!", "Interesting post", "Subscribed!"]);
      } else {
        reject("Failed to fetch comments ❌");
      }
    }, 800);
  });
}

// promise chaining and solve this

// fetchUserData()
//   .then(function (result) {
//     console.log(result);
//     return fetchUserPosts();
//   })
//   .then(function (posts) {
//     console.log(posts);
//     return fetchUserComments();
//   })
//   .then(function (comments) {
//     console.log(comments);
//   }); // executes in sequence , results are also in sequence

// using promise combinators

// Promise.all

// Promise.all([fetchUserData(), fetchUserPosts(), fetchUserComments()]).then(
//   function (result) {
//     console.log(result[0]);
//     console.log(result[1]);
//     console.log(result[2]);
//   }
// ).catch(function(err){
//     console.log(err)
// });


Promise.allSettled([fetchUserData(), fetchUserPosts(), fetchUserComments()]).then(
    function (result) {
      console.log(result)
    }
  ).catch(function(err){
      console.log(err)
  });
