thermostat = new Thermostat();

var temperatureColor = function() {
  temperature.classList.remove(temperature.className);
  temperature.classList.add(thermostat.setColour());
}

var update = function() {
  temperature.innerHTML = thermostat.temperature;
  temperatureColor();
}

var temperature = document.getElementsByTagName('span')[0];

update();

var increase_button = document.getElementsByTagName('button')[0];
increase_button.onclick = function() {
  thermostat.increaseTemperature();
  update();
  };

var decrease_button = document.getElementsByTagName('button')[1];
decrease_button.onclick = function() {
  thermostat.decreaseTemperature();
  update();
}

var reset_button = document.getElementsByTagName('button')[2];
reset_button.onclick = function() {
  thermostat.reset();
  update();
}

var power_saving_mode = document.getElementById('unchecked');
power_saving_mode.onchange = function() {
  thermostat.switchPowerSavingMode();
  update();
}

