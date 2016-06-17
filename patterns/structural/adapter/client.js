var ShipLibrary = require('./libs/ship')
var ShipAdapter = require('./adapter/ship-adapter')

var ship = new ShipAdapter(new ShipLibrary);
ship.TurnLeft();
ship.TurnRight();
ship.GoForward();