var TravelResult = (function () {
  function TravelResult(durationInDays, probabilityOfDeath, cost) {
    this.durationInDays = durationInDays;
    this.probabilityOfDeath = probabilityOfDeath;
    this.cost = cost;
  }

  return TravelResult;
})();
Travel.TravelResult = TravelResult;


var SeaGoingVessel = (function () {
  function SeaGoingVessel() {
  }

  SeaGoingVessel.prototype.Travel = function (source, destination) {
    return new TravelResult(15, .25, 500);
  };
  return SeaGoingVessel;
})();
var Horse = (function () {
  function Horse() {
  }

  Horse.prototype.Travel = function (source, destination) {
    return new TravelResult(30, .25, 50);
  };
  return Horse;
})();
var Walk = (function () {
  function Walk() {
  }

  Walk.prototype.Travel = function (source, destination) {
    return new TravelResult(150, .55, 0);
  };
  return Walk;
})();

var strat;
var timeThreshholdDays = 40;

if (timeThreshholdDays > 150)
  strat = new Walk();
else if (timeThreshholdDays > 30)
  strat = new Horse();
else
  strat = new SeaGoingVessel();

var travelResult = strat.Travel();