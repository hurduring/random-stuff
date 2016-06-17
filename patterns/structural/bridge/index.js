var Religion = {}

var OldGods = (function () {
  function OldGods() {
  }

  OldGods.prototype.prayTo = function (sacrifice) {
    console.log("We Old Gods hear your prayer");
  };
  return OldGods;
})();
Religion.OldGods = OldGods;

var DrownedGod = (function () {
  function DrownedGod() {
  }

  DrownedGod.prototype.prayTo = function (humanSacrifice) {
    console.log("*BUBBLE* GURGLE");
  };
  return DrownedGod;
})();
Religion.DrownedGod = DrownedGod;

var SevenGods = (function () {
  function SevenGods() {
  }

  SevenGods.prototype.prayTo = function (prayerPurpose) {
    console.log("Sorry there are a lot of us, it gets confusing?");
  };
  return SevenGods;
})();
Religion.SevenGods = SevenGods;




var OldGodsAdapter = (function () {
  function OldGodsAdapter() {
    this._oldGods = new OldGods();
  }

  OldGodsAdapter.prototype.prayTo = function () {
    var sacrifice = 'sacrifice';
    this._oldGods.prayTo(sacrifice);
  };
  return OldGodsAdapter;
})();
Religion.OldGodsAdapter = OldGodsAdapter;
var DrownedGodAdapter = (function () {
  function DrownedGodAdapter() {
    this._drownedGod = new DrownedGod();
  }

  DrownedGodAdapter.prototype.prayTo = function () {
    var sacrifice = 'human sacrifice';
    this._drownedGod.prayTo(sacrifice);
  };
  return DrownedGodAdapter;
})();
Religion.DrownedGodAdapter = DrownedGodAdapter;
var SevenGodsAdapter = (function () {
  function SevenGodsAdapter() {
    this.prayerPurposeProvider = 'player purpose';
    this._sevenGods = new SevenGods();
  }

  SevenGodsAdapter.prototype.prayTo = function () {
    this._sevenGods.prayTo(this.prayerPurposeProvider);
  };
  return SevenGodsAdapter;
})();
Religion.SevenGodsAdapter = SevenGodsAdapter;



var god1 = new Religion.SevenGodsAdapter();
var god2 = new Religion.DrownedGodAdapter();
var god3 = new Religion.OldGodsAdapter();
var gods = [god1, god2, god3];
for(var i =0; i<gods.length; i++){
gods[i].prayTo();
}