const apiKey = 'e1c45a5c97656954b100c45fe6b2a58d';

async function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeather(data) {
  const cityElement = document.getElementById('city');
  const tempElement = document.getElementById('temp');
  const weatherElement = document.getElementById('weather');
  const weatherIconElement = document.getElementById('weather-icon');

  cityElement.textContent = data.name;
  tempElement.textContent = data.main.temp;
  weatherElement.textContent = data.weather[0].description;

  const iconCode = data.weather[0].icon;
  weatherIconElement.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
}

fetchWeather('New York');


