function currentWeather(response) {
  let showCity = document.querySelector("#current-city");
  showCity.innerHTML = response.data.name;

  let temp = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  temp.innerHTML = `${temperature}º `;

  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `Wind speed: ${wind}km/hr`;
}

function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-city");
  let city = currentCity.value;

  let apiKey = "0bd923d5cac86a139a92eda79ce74580";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(currentWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
