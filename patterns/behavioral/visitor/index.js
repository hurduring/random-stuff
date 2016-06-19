var Knight = (function () {
  function Knight() {
    this._type = "Knight";
  }

  Knight.prototype.printName = function () {
    console.log("Knight");
  };
  Knight.prototype.visit = function (visitor) {
    visitor.visit(this);
  };
  return Knight;
})();

var Peon = (function () {
  function Peon() {
    this._type = "Peon";
  }

  Peon.prototype.printName = function () {
    console.log("Peon");
  };
  Peon.prototype.visit = function (visitor) {
    visitor.visit(this);
  };
  return Peon;
})();

var Shaman = (function () {
  function Shaman() {
    this._type = "Shaman";
  }

  Shaman.prototype.printName = function () {
    console.log("Shaman");
  };
  Shaman.prototype.visit = function (visitor) {
    visitor.visit(this);
  };
  return Shaman;
})();


var SelectiveNamePrinterVisitor = (function () {
  function SelectiveNamePrinterVisitor() {
  }

  SelectiveNamePrinterVisitor.prototype.visit = function (memberOfArmy) {
    if (memberOfArmy._type == "Knight") {
      this.visitKnight(memberOfArmy);
    } else if (memberOfArmy._type = "Peon") {
      this.visitPeon(memberOfArmy);
    } else if (memberOfArmy._type = "Shaman") {
      this.visitShaman(memberOfArmy);
    } else {
      console.log("Unknown Type");
    }
  };

  SelectiveNamePrinterVisitor.prototype.visitKnight = function (memberOfArmy) {
    memberOfArmy.printName();
  };
  SelectiveNamePrinterVisitor.prototype.visitPeon = function (memberOfArmy) {
    memberOfArmy.printName();
  };
  SelectiveNamePrinterVisitor.prototype.visitShaman = function (memberOfArmy) {
    memberOfArmy.printName();
  };

  return SelectiveNamePrinterVisitor;
})();


var army = [];
army.push(new Knight());
army.push(new Peon());
army.push(new Peon());
army.push(new Peon());
army.push(new Shaman());

army.forEach(function (item) {
  item.visit(new SelectiveNamePrinterVisitor());
})