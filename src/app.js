function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}: ${minutes}`;
}

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

  let dateElement = document.querySelector("#current-date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
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
