var apiKey = require('./../.env').apiKey;
var Weather = function () {
}
Weather.prototype.toCelsius = function(kelvin) {
  return kelvin - 273.15;
};

Weather.prototype.getWeather = function (city, displayWeather) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
  displayWeather(city, response.main.humidity, response.main.temp, (response.main.temp - 273.15));
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}
exports.weatherModule = Weather;
