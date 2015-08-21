$(document).ready(function() {
  // APIKEY = ENV['OPEN_WEATHER_KEY'];
  var thermostat = new Thermostat();

  $(".get_weather").click(function(event) {
    // event.preventDefault();
    // var city = $(".get_weather").val();
    // var request = getWeatherInfo();

    // if(request.status == 304 || request.status == 200) {
    //   showWeather(JSON.parse(request.responseText));
    // }
    // else {
    //   return "There was an error.";
    // }
    var city = $("input:text").val();
    // var request = getWeatherInfo(city);
    // if(request.status == 200) {
    //   showWeather(request);
    // }
    // else {
    //   console.log(request.status);
    //   noCity();
    // }
    getWeatherInfo(city);
  });

   function showWeather(weather_info) {
    $(".weather").text(weather_info.weather[0].description);
    $(".weather_temp").text(Math.round(weather_info.main.temp) + "°C");
    var weather_image_src = "http://openweathermap.org/img/w/" + weather_info.weather[0].icon + ".png";
    $(".weather_image").html("<img src=" + weather_image_src + ">");
  };


  function noCity() {
      $(".weather").text("I don't know that city!");
    };

  function getWeatherInfo(city) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&type=accurate&APPID=e3771f9e183904f9fa76308c7ef5505c", function(result) {
      showWeather(result);
    })
    };


    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID={e3771f9e183904f9fa76308c7ef5505c}", false);
    // xhr.send();
    // return xhr;
  // };

  var sendTemp = function(callback) {
    $.post("/temperature", {temp: thermostat.temperature}, callback
  )};

  var getTemp = function() {
    $.getJSON("/temperature", function(result) {

      $("span").text(result.temp);
        temperatureColor();
    });
  }
  function temperatureColor() {
    $("span").removeClass().addClass(thermostat.setColour());
  };

  // function initialTemp() {
  //   $("span").text(thermostat.temperature);
  //   temperatureColor();
  // }

  // function update(result) {
  //   temperatureColor();
  //   $("span").text(result.temperature);
  // };

  // initialTemp();

  sendTemp(getTemp);
  temperatureColor();
  console.log(thermostat.temperature);

  $("button[data-temp-control='up']").click(function() {
    thermostat.increaseTemperature();
    console.log(thermostat.temperature);
    sendTemp(getTemp);
  });

  $("button[data-temp-control='down']").click(function() {
    thermostat.decreaseTemperature();
    sendTemp(getTemp);
  });

  $("button[data-temp-control='reset']").click(function() {
    thermostat.reset();
    sendTemp(getTemp);
  });

  $("input:checkbox").change(function() {
    thermostat.switchPowerSavingMode();
    sendTemp(getTemp);
    temperatureColor();
  });
});

