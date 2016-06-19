var BasicBeer = (function () {
  function BasicBeer() {
  }

  BasicBeer.prototype.Create = function () {
    this.AddIngredients();
    this.Stir();
    this.Ferment();
    this.Test();
    if (this.TestingPassed()) {
      this.Distribute();
    }
  };
  BasicBeer.prototype.AddIngredients = function () {
    throw "Add ingredients needs to be implemented";
  };
  BasicBeer.prototype.Stir = function () {
//stir 15 times with a wooden spoon
  };
  BasicBeer.prototype.Ferment = function () {
//let stand for 30 days
  };
  BasicBeer.prototype.Test = function () {
//draw off a cup of beer and taste it
  };
  BasicBeer.prototype.TestingPassed = function () {
    throw "Conditions to pass a test must be implemented";
  };
  BasicBeer.prototype.Distribute = function () {
//place beer in 50L casks
  };
  return BasicBeer;
})();

var RaspberryBeer = (function (_super) {

  function RaspberryBeer() {
    _super.apply(this, arguments);
  }

  RaspberryBeer.prototype = Object.create(_super.prototype)

  RaspberryBeer.prototype.AddIngredients = function () {
//add ingredients, probably including raspberries
    console.log('add ingredient to raspberry')
  };
  RaspberryBeer.prototype.TestingPassed = function () {
//beer must be reddish and taste of raspberries
  };


  return RaspberryBeer;
})(BasicBeer);

var RB = new RaspberryBeer();
RB.AddIngredients();
