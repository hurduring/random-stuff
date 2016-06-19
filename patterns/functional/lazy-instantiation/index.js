var Bread = (function () {
  function Bread(breadType) {
    this.breadType = breadType;
    console.log("Bread " + breadType + " created.");
  }

  return Bread;
})();


var Bakery = (function () {
  function Bakery() {
    this.requiredBreads = [];
    this.breads = [];
  }

  Bakery.prototype.orderBreadType = function (breadType) {
    this.requiredBreads.push(breadType);
  };
  Bakery.prototype.pickUpBread = function (breadType) {
    console.log("Pickup of bread " + breadType + " requested");
    if (this.breads.length === 0) {
      this.createBreads();
    }
    for (var i = 0; i < this.breads.length; i++) {
      if (this.breads[i].breadType == breadType)
        return this.breads.splice(i, 1);
    }
  };
  Bakery.prototype.createBreads = function () {
    for (var i = 0; i < this.requiredBreads.length; i++) {
      this.breads.push(new Bread(this.requiredBreads[i]));
    }
    this.requiredBreads = [];
  };
  return Bakery;
})();


var bakery = new Bakery();
bakery.orderBreadType("Brioche");
bakery.orderBreadType("Chapati");
bakery.pickUpBread('Chapati');
bakery.pickUpBread('Brioche');
bakery.orderBreadType("Chapati");
bakery.orderBreadType("Chapati");
bakery.pickUpBread('Chapatti');



