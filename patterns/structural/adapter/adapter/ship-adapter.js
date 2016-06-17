var ShipAdapter = (function () {
  function ShipAdapter(ship) {
    this._ship = ship;
  }

  ShipAdapter.prototype.TurnLeft = function () {
    this._ship.SetRudderAngleTo(-30);
    this._ship.SetSailAngle(3, 12);
  };
  ShipAdapter.prototype.TurnRight = function () {
    this._ship.SetRudderAngleTo(30);
    this._ship.SetSailAngle(5, -9);
  };
  ShipAdapter.prototype.GoForward = function () {
    this._ship.complexSomething()
  };
  return ShipAdapter;
})();

module.exports = ShipAdapter;