// Race and Any

function fetchFromOpenWeather() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("21 C in Bengaluru"), 1000)
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
