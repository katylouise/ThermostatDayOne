describe('Thermostat', function() {
  beforeEach(function() {
    beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it("should show the default temperature", function() {
    expect("span").toContainText("20");
  });

  it("should increase temperature when you click the increase button", function() {
    $(".increase").click;
    expect("span").toContainText("21");
  });
});
