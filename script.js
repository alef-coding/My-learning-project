let today = new Date();
function showTimeDay(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  currentMinutes = currentMinutes > 9 ? currentMinutes : "0" + currentMinutes;
  let currentTimeDay = document.querySelector("#time-date-now");
  currentTimeDay.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;
}
showTimeDay(today);

function getCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let searchedCity = document.querySelector("#searched-city");
  searchedCity.innerHTML = `${cityInput.value}`;
}

function getTemperature(event) {
  event.preventDefault();
  let apiKey = "2da5bee1358b81c99ae3abe58150ca38";
  let units = "metric";
  let cityName = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${temperature}`;
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", (event) => {
  getCity(event);
  getTemperature(event);
});

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let place = position.name;
  let apiKey = "2da5bee1358b81c99ae3abe58150ca38";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  let searchedCity = document.querySelector("#searched-city");
  searchedCity.innerHTML = `${place}`;
  axios.get(apiUrl).then(showTemperature);
}

let geoLocation = document.querySelector("#geolocation");
geoLocation.addEventListener("submit", getCurrentLocation(event));

//function getF(event) {
// event.preventDefault();
//let currentTemp = document.querySelector("#current-temp");
//currentTemp.innerHTML = `50°F`;
//let currentMinMaxTemp = document.querySelector("#min-max-temp");
//currentMinMaxTemp.innerHTML = `Min 43°F - Max 57°F`;
//}
//let unitF = document.querySelector("#f-selector");
//unitF.addEventListener("submit", getF);

//function getC(event) {
//event.preventDefault();
//let currentTemp = document.querySelector("#current-temp");
//currentTemp.innerHTML = `10°C`;
//let currentMinMaxTemp = document.querySelector("#min-max-temp");
//currentMinMaxTemp.innerHTML = `Min 6°C - Max 14°C`;
//}
//let unitC = document.querySelector("#c-selector");
//unitC.addEventListener("submit", getC);
