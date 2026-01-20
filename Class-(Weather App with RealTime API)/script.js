// http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=Milan&aqi=no

let searchForm = document.querySelector(".search-form");
let inputFiled = document.querySelector(".searchField");
let locationField = document.querySelector('.location')


let tempField =  document.querySelector('.temp')

let targetLocation = "Mumbai";

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  targetLocation = inputFiled.value;
  fetchWeatherData(targetLocation);
});

// Dom Operations

async function fetchWeatherData(location) {
  let url = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`;
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);


  let temparature = data.current.temp_c
  let place = data.location.name




  tempField.innerText = temparature
  locationField.innerText = place

}

fetchWeatherData(targetLocation);
