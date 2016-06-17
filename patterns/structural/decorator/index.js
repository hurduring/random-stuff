var BasicArmor = (function () {
  function BasicArmor() {
  }
  BasicArmor.prototype.CalculateDamageFromHit = function (hit) {
    return 1;
  };
  BasicArmor.prototype.GetArmorIntegrity = function () {
    return 1;
  };
  return BasicArmor;
})();

var ChainMail = (function () {
  function ChainMail(decoratedArmor) {
    this.decoratedArmor = decoratedArmor;
  }

  ChainMail.prototype.CalculateDamageFromHit = function (hit) {
    hit.Strength = hit.Strength * .8;
    return this.decoratedArmor.CalculateDamageFromHit(hit);
  };
  ChainMail.prototype.GetArmorIntegrity = function () {
    return .9 * this.decoratedArmor.GetArmorIntegrity();
  };
  return ChainMail;
})();


var armor = new ChainMail(new BasicArmor());
console.log(armor.CalculateDamageFromHit({
  Location: "head",
  Weapon: "Sock filled with pennies", Strength: 12
}));