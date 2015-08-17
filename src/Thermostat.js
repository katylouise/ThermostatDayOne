function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;

}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature <= this.minTemperature) {
    throw new Error("Temperature can not fall below minimum.");
  }
  this.temperature -= 1;
}
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