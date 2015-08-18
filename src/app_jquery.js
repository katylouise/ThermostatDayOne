$(document).ready(function() {
  thermostat = new Thermostat();

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

