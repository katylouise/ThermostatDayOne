describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a temperature of 20 degrees at the start", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be able to increase temperature", function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should be able to increase temperature by a number", function() {
    thermostat.increaseTemperature(4);
    expect(thermostat.temperature).toEqual(24);
  });

  it("should be able to decrease temperature", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it("should be able to decrease temperature by a number", function() {
    thermostat.decreaseTemperature(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it("should be able to increase temperature after a decrease", function() {
    thermostat.decreaseTemperature();
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    expect(thermostat.minTemperature).toEqual(10);
  });

  it("should not allow temperature to go below minimum temperature", function() {
    expect(function() {
      thermostat.decreaseTemperature(11);
    }).toThrowError("Temperature can not go below minimum.");
  });

  it("should not allow temperature to go above maximum temperature", function() {
    expect(function() {
      thermostat.increaseTemperature(6);
    }).toThrowError("Temperature can not go above maximum.");
  });

  it("should have power saving mode on by default", function() {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it("should indicate power saving mode on when switched on", function() {
    thermostat.switchPowerSavingMode();
    expect(thermostat.switchPowerSavingMode()).toEqual("Power Saving Mode On");
  });

  it("should indicate power saving mode off when switched off", function() {
    expect(thermostat.switchPowerSavingMode()).toEqual("Power Saving Mode Off");
  });

  it("should be able to switch power saving mode off", function() {
    thermostat.switchPowerSavingMode();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it("should have default maximum temperature of 25 degrees", function() {
    expect(thermostat.maxTemperature).toEqual(25);
  });

  it("should have a maximum temperature of 32 degrees if power saving mode is off", function() {
    thermostat.switchPowerSavingMode();
    expect(thermostat.maxTemperature).toEqual(32);
  });

  it("can reset the temperature to the default", function() {
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });
  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
