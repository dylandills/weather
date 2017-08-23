var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, humidityData, tempData, tempDataCelsius) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
  $('.showKelvin').text("The temperature in " + city + " is " + tempData + "° Kelvin or " + tempDataCelsius.toFixed(2) + "° Celsius");
}

$(document).ready(function() {
  var weather = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    weather.getWeather(city, displayWeather);
  });
});
