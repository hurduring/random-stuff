var Ship = (function () {
  function Ship() {
    this.attack = function(){
      console.log('ship attacking')
    }
  }

  Ship.prototype.TurnLeft = function () {
  };
  Ship.prototype.TurnRight = function () {
  };
  Ship.prototype.GoForward = function () {
  };
  return Ship;
})();


var Admiral = (function () {
  function Admiral() {
    this.act = function(){
      console.log('admiral acting')
    }
  }

  return Admiral;
})();


var SupplyCoordinator = (function () {
  function SupplyCoordinator() {
    this.coordinate = function(){
      console.log('coordinator coordinate')
    }
  }

  return SupplyCoordinator;
})();


var Fleet = (function () {
function Fleet(ship, admiral, supplyCoordinator) {
  this._ship = ship;
  this._admiral = admiral;
  this._supplyCoordinator = supplyCoordinator;
}
Fleet.prototype.setDestination = function (destination) {
};
Fleet.prototype.resupply = function () {
};
Fleet.prototype.attack = function (destination) {
  console.log('destination', destination)
  this._ship.attack();
  this._admiral.act();
  this._supplyCoordinator.coordinate();
};
return Fleet;
})();

new Fleet(new Ship(), new Admiral(), new SupplyCoordinator()).attack('barbarossa')