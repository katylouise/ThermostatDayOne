thermostat = new Thermostat();

TemperatureColor = function() {
  temperature.classList.remove(temperature.className);
  temperature.classList.add(thermostat.setColour());
}

Update = function() {
  temperature.innerHTML = thermostat.temperature;
  TemperatureColor();
}

var temperature = document.getElementsByTagName('span')[0];
temperature.innerHTML = thermostat.temperature;
TemperatureColor();


var increase_button = document.getElementsByTagName('button')[0];
increase_button.onclick = function() {
  thermostat.increaseTemperature();
  Update();
  };

var decrease_button = document.getElementsByTagName('button')[1];
decrease_button.onclick = function() {
  thermostat.decreaseTemperature();
  Update();
}

var reset_button = document.getElementsByTagName('button')[2];
reset_button.onclick = function() {
  thermostat.reset();
  Update();
}

var power_saving_mode = document.getElementById('unchecked');
power_saving_mode.onchange = function() {
  thermostat.switchPowerSavingMode();
  Update();
}

