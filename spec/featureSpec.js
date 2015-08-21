describe('Thermostat',function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it("should show the default temperature", function() {
    expect("span").toContainText("20");
  });

  it("should increase temperature when you click the increase button", function() {
    $("button[data-temp-control='up']").click();
    expect("span").toContainText("21");
  });

  it("should decrease temperature when you click the decrease button", function() {
    $("button[data-temp-control='down']").click();
    expect("span").toContainText("19");
  });

  it("should be able to change the temperature up and down consistently", function() {
    $("button[data-temp-control='up']").click();
    expect("span").toContainText("21");
    $("button[data-temp-control='down']").click();
    expect("span").toContainText("20");
  });

  it("should be able to reset the temperature", function() {
    $("button[data-temp-control='up']").click();
    $("button[data-temp-control='reset']").click();
    expect("span").toContainText("20");
  });


  it("should have a minimum temperature of 10 degrees", function() {
    expect(function() {
      for (var i = 0; i < 11; i++) {
        $("button[data-temp-control='down']").click();
      }
    }).toThrowError("Temperature can not go below minimum.");
    expect("span").toContainText("10");
  });

  it("should cap the maximum at 25 degrees when power saving mode is turned on", function() {
    expect(function() {
      for (var i = 0; i < 7; i++) {
        $("button[data-temp-control='up']").click(); }
      }).toThrowError("Temperature can not go above maximum.");
    expect("span").toContainText("25");
  });

  it("should cap the maximum at 32 degrees when power saving mode is turned off", function() {
    $("input:checkbox").change();
    expect(function() {
      for (var i = 0; i < 14; i++) {
        $("button[data-temp-control='up']").click();
      }
    }).toThrowError("Temperature can not go above maximum.");
    expect("span").toContainText("32");
  });

  it("should reset temperature when power saving mode is switched from off to on", function() {
    $("input:checkbox").change();
    $("button[data-temp-control='up']").click();
    $("input:checkbox").change();
    expect("span").toContainText("20");
  });

  it("should have a green temperature if below 18 degrees", function() {
    for (var i = 0; i < 3; i++) {
      $("button[data-temp-control='down']").click();
    }
    expect("span").toHaveClass("text--green");
    expect($("span").css("color")).toBe("rgb(0, 128, 0)");
  });

  it("should have an orange temperature if below 25 degrees", function() {
    expect("span").toHaveClass("text--orange");
    expect($("span").css("color")).toBe("rgb(255, 165, 0)");
  });

  it("should have a red temperature if above 25 degrees", function() {
    for (var i = 0; i < 5; i++) {
      $("button[data-temp-control='up']").click();
    }
    expect("span").toHaveClass("text--red");
    expect($("span").css("color")).toBe("rgb(255, 0, 0)");
  })

  it("should have power saving mode checked at start", function() {
    expect("input:checkbox").toHaveProp("checked");
  });

  describe("Ajax tests", function() {

    it("should call weather API", function() {
      spyOn($, "getJSON").and.callFake(function(url, callback) {
        callback({"weather":[{"description":"light intensity drizzle","icon":"09d"}],"main":{"temp":20.28}}
        );
      });
      $("input[name=city]").val("London");
      $(".get_weather").click();
      expect($.getJSON).toHaveBeenCalled();
      expect($(".weather").html()).toEqual("light intensity drizzle");
      expect($(".weather_temp").html()).toBeTruthy();
    });
  });
});


