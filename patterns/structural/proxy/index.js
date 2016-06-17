var BarrelCalculator = (function () {
  function BarrelCalculator() {
  }

  BarrelCalculator.prototype.calculateNumberNeeded =
    function (volume) {
      return Math.ceil(volume / 357);
    };
  return BarrelCalculator;
})();

var DragonBarrelCalculator = (function () {
  function DragonBarrelCalculator() {
  }

  DragonBarrelCalculator.prototype.calculateNumberNeeded =
    function (volume) {
      if (this._barrelCalculator == null)
        this._barrelCalculator = new BarrelCalculator();
      return this._barrelCalculator.calculateNumberNeeded
      (volume * .77);
    };
  return DragonBarrelCalculator;
})();