function placeOrder(drink, successCallback, errorCallback) {
  setTimeout(() => {
    if (drink === "coffee") {
      successCallback("Order taken");
    } else {
      errorCallback("Cannot take the Order");
    }
  }, 1000);
} // 1

function processOrder(orderPlaced, callback) {
  setTimeout(() => {
    callback(`${orderPlaced} and Served.`);
  }, 1000);
} // 2

function generateBill(callback) {
  setTimeout(() => {
    callback("Bill Generated");
  }, 1000);
} // 3

// execute the functions in order one after the other

function serverOrder() {
  placeOrder("coffee", function (orderPlaced) {
    console.log(orderPlaced);
    processOrder(orderPlaced, function (orderReady) {
      console.log(orderReady);
      generateBill(function (billgenerated) {
        console.log(billgenerated);
      });
        // here
           //here
              //here
                 // and you have a callback hell
    });
  });
}

serverOrder();
