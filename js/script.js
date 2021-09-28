weatherDiv = document.querySelector('.weather');

let weatherInfo = document.querySelector('.weather-info')


let weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Sydney,au&APPID=8aa67d86d348bab0fecde484e8b2ea80'


fetch(weatherAPI)
  .then(response => response.json())
  .then(displayWeatherData)


let convertUnits = (data) => data - 273.15;

function displayWeatherData(data) {
  let {main:{temp, feels_like, temp_min, temp_max, pressure}, sys:{sunrise, sunset}, name, weather} = data
  let celsiusTemp = convertUnits(temp);
  let feelsLikeTemp = convertUnits(feels_like);

  let html = `
  <div class="weather-info">
    <p>Current temperature: ${celsiusTemp.toFixed(1)}</p>
    <p>Feels like: ${feelsLikeTemp.toFixed(1)}</p>
  </div>
  `
  weatherInfo.innerHTML = html;
}
