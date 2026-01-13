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
    resolve(`${orderPlaced} and Served.`);
  });
}

function generateBill() {
  return new Promise(function (resolve) {
    resolve(`Bill Generated`);
  });
}

// execute all these function one after another in order

placeOrder("coffee")
  .then(function (orderPlaced) {
    console.log(orderPlaced);
    return orderPlaced;
  })
  .then(function (orderPlacedData) {
    let processedOrder = processOrder(orderPlacedData);
    return processedOrder;
    // 2nd promise
  })
  .then(function (processedOrderData) {
    console.log(processedOrderData);
    const finalBill = generateBill();
    return finalBill;
    // 3rd promise
  })
  .then(function (finalBillData) {
    console.log(finalBillData);
    // 4th promise
  })
  .catch(function (error) {
    console.log(error);
  });
