// Race and Any

function fetchFromOpenWeather() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("No Data"), 400)
  );
}

function fetchFromWeatherAPI() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("20 C in Bengaluru"), 700)
  );
}

function fetchFromAccuWeather() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("20.5 C in Bengaluru"), 1200)
  );
}

//

Promise.race([
  fetchFromOpenWeather(),
  fetchFromWeatherAPI(),
  fetchFromAccuWeather(),
]).then(function (result) {
  console.log(result);
});
