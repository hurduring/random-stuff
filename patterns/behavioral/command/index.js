var LordInstructions = (function () {
  function LordInstructions() {
  }

  LordInstructions.prototype.BringTroops = function (location, numberOfTroops, when) {
    console.log("You have been instructed to bring " +
      numberOfTroops + " troops to " + location + " by " + when);
  };
  LordInstructions.prototype.UnBringTroops = function (location, numberOfTroops, when) {
    console.log("You have been instructed to unbring " +
      numberOfTroops + " troops to " + location + " by " + when);
  };
  return LordInstructions;
})();


var BringTroopsCommand = (function () {
  function BringTroopsCommand(location, numberOfTroops, when) {
    this._location = location;
    this._numberOfTroops = numberOfTroops;
    this._when = when;
  }

  BringTroopsCommand.prototype.Execute = function () {
    var receiver = new LordInstructions();
    receiver.BringTroops(this._location, this._numberOfTroops,
      this._when);
  };
  BringTroopsCommand.prototype.Undo = function () {
    var receiver = new LordInstructions();
    receiver.UnBringTroops(this._location, this._numberOfTroops,
      this._when);
  };
  return BringTroopsCommand;
})();

var Invoker = (function () {
  function Invoker() {
    this.commands = [];
    this.undo = [];
  }

  Invoker.prototype.execute = function () {
    var command = this.commands.shift();
    this.undo.unshift(command);
    command.Execute()
  }
  Invoker.prototype.addCommand = function (command) {
    this.commands.push(command)
  }
  Invoker.prototype.undoCommand = function () {
    this.undo.shift().Undo();
  }
  return Invoker;
}())

var inv = new Invoker();
inv.addCommand(new BringTroopsCommand('derp', 100, 'now'));
inv.addCommand(new BringTroopsCommand('derp', 300, 'now'));
inv.execute();
inv.undoCommand();

console.log(inv.commands)
console.log(inv.undo)