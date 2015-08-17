thermostat = new Thermostat();

TemperatureColor = function() {
  if (thermostat.temperature < 18) {
    temperature.style.color = "green";
  }
  else if (thermostat.temperature < 25) {
    temperature.style.color = "orange"
  }
  else {
    temperature.style.color = "red"
  }
}

var temperature = document.getElementById('temperature');
temperature.innerHTML = thermostat.temperature;
TemperatureColor();


var increase_button = document.getElementById('increase_button');
increase_button.onclick = function() {
  thermostat.increaseTemperature();
  temperature.innerHTML = thermostat.temperature;
  TemperatureColor();
  };

var decrease_button = document.getElementById('decrease_button');
decrease_button.onclick = function() {
  thermostat.decreaseTemperature();
  temperature.innerHTML = thermostat.temperature;
  TemperatureColor();
}

var reset_button = document.getElementById('reset_button');
reset_button.onclick = function() {
  thermostat.reset();
  temperature.innerHTML = thermostat.temperature;
  TemperatureColor();
}

var power_saving_mode = document.getElementById('power_saving_mode');
power_saving_mode.onchange = function() {
  thermostat.switchPowerSavingMode();
}

