$(document).ready(function() {
  thermostat = new Thermostat();

  update = function() {
    $(".temperature").text(thermostat.temperature);
  }

  temperatureColor = function() {
    $(".temperature")
  }

  update();

  $(".increase").click(function() {
    thermostat.increaseTemperature();
    update();
    // TemperatureColor();
  });

  $(".decrease").click(function() {
    thermostat.decreaseTemperature();
    update();
    // TemperatureColor();
  });

  $(".reset").click(function() {
    thermostat.reset();
    update();
    // TemperatureColor();
  });

  $("input:checkbox").change(function() {
    thermostat.switchPowerSavingMode();
    update();
    // TemperatureColor();
  })
});

