$(document).ready(function() {
  thermostat = new Thermostat();

  var temperature = $("temperature").innerHTML;
  temperature = thermostat.temperature;

  // TemperatureColor = function() {
  // temperature.style.color = thermostat.setColour();
  // }

  // TemperatureColor();

  $("increase_button").click(function() {
    thermostat.increaseTemperature();
    temperature = thermostat.temperature;
    // TemperatureColor();
  });

  $("decrease_button").click(function() {
    thermostat.decreaseTemperature();
    temperature = thermostat.temperature;
    // TemperatureColor();
  });

  $("reset_button").click(function() {
    thermostat.reset();
    temperature = thermostat.temperature;
    // TemperatureColor();
  });

  $("input:checkbox").change(function() {
    thermostat.switchPowerSavingMode();
    // TemperatureColor();
  })
});

