function Thermostat() {
  this.temperature = 20; //change these magic numbers to constants
  this.minTemperature = 10;
  this.maxTemperature = 25;
  this.powerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function(number) {
  number = number || 1;
  if (this.temperature + number >= this.maxTemperature) {
    throw new Error("Temperature can not go above maximum.")
  }
  return this.temperature += number;
};

Thermostat.prototype.decreaseTemperature = function(number) {
  number = number || 1;
  if (this.temperature - number <= this.minTemperature) {
    throw new Error("Temperature can not go below minimum.");
  }
  return this.temperature -= number;
};

Thermostat.prototype.switchPowerSavingMode = function() {
  if (this.powerSavingMode) {
    this.powerSavingMode = false;
    this.setMaxTemperature();
    return "Power Saving Mode Off";
  }
  else {
    this.powerSavingMode = true;
    this.setMaxTemperature();
    return "Power Saving Mode On";
  }
};

Thermostat.prototype.setMaxTemperature = function() {
  if (this.powerSavingMode) {
    return this.maxTemperature = 25;
  }
  else {
    return this.maxTemperature = 32;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };