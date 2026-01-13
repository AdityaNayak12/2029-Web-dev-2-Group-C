function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order taken for coffee");
    } else {
      reject("Cannot take the Order");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`${orderPlaced} and Served.`);
    }, 10000);
  });
}

function generateBill() {
  return new Promise(function (resolve) {
    resolve(`Bill Generated`);
  });
}

// execute all these function one after another in order

// placeOrder("coffee")
//   .then(function (orderPlaced) {
//     console.log(orderPlaced);
//     return orderPlaced;
//   })
//   .then(function (orderPlacedData) {
//     let processedOrder = processOrder(orderPlacedData);
//     return processedOrder;
//     // 2nd promise
//   })
//   .then(function (processedOrderData) {
//     console.log(processedOrderData);
//     const finalBill = generateBill();
//     return finalBill;
//     // 3rd promise
//   })
//   .then(function (finalBillData) {
//     console.log(finalBillData);
//     // 4th promise
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// solve this with async await

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("tea");
    let orderServed = await processOrder(orderPlaced); // 10 sec
    let finalBill = await generateBill();
    console.log(orderPlaced);
    console.log(orderServed);
    console.log(finalBill);
  } catch (error) {
    console.log(error);
  }
}

//   function readBook(){
//     console.log("reading a book....")
//   }

serveOrder();

//   readBook()
