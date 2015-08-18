$(document).ready(function() {
  thermostat = new Thermostat();

  $(".get_weather").click(function() {
    var request = getWeather("London");

    if(request.status == 304 || request.status == 200) {
      //to be continued...
    }
  });

  function getWeather(city) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London,uk");
    xhr.send();
    return xhr;
  }

  temperatureColor = function() {
    $("span").removeClass();
    $("span").addClass(thermostat.setColour());
  }

  update = function() {
    $("span").text(thermostat.temperature);
    temperatureColor();
  }

  update();

  $(".increase").click(function() {
    thermostat.increaseTemperature();
    update();
    temperatureColor();
  });

  $(".decrease").click(function() {
    thermostat.decreaseTemperature();
    update();
    temperatureColor();
  });

  $(".reset").click(function() {
    thermostat.reset();
    update();
    temperatureColor();
  });

  $("input:checkbox").change(function() {
    thermostat.switchPowerSavingMode();
    update();
    temperatureColor();
  })
});

