$(document).ready(function() {
  // APIKEY = ENV['OPEN_WEATHER_KEY'];
  thermostat = new Thermostat();

  $(".get_weather").click(function(event) {
    event.preventDefault();
    // var city = $(".get_weather").val();
    var request = getWeatherInfo();

    if(request.status == 304 || request.status == 200) {
      showWeather(JSON.parse(request.responseText));
    }
    else {
      return "There was an error.";
    }
  });

  function getWeatherInfo() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID={e3771f9e183904f9fa76308c7ef5505c}", false);
    xhr.send();
    return xhr;
  };

  function showWeather(weather_info) {
    $(".weather").text(weather_info.weather[0].description);
  };

  function temperatureColor() {
    $("span").removeClass();
    $("span").addClass(thermostat.setColour());
  };

  function update() {
    $("span").text(thermostat.temperature);
    temperatureColor();
  };

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

