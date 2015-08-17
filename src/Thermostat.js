function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
  this.maxTemperature = 25;
  this.powerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function(number) {
  number = number || 1;
  this.temperature += number;

};

Thermostat.prototype.decreaseTemperature = function(number) {
  number = number || 1;
  this.temperature -= number;
  if (this.temperature <= this.minTemperature) {
    throw new Error("Temperature can not fall below minimum.");
  }
};

Thermostat.prototype.switchPowerSavingMode = function() {
  return this.powerSavingMode = true ? false : true;
};

Thermostat.prototype.setMaxTemperature = function() {
  return this.maxTemperature = 25 ? 32 : 25;
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