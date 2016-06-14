var KingDog = require('./members/king');
var HandOfKingDog = require('./members/hand-of-king');

var DogFamilyFactory = (function () {
  function DogFamilyFactory() {
  }
  DogFamilyFactory.prototype.getKing = function () {
    return KingDog;
  };
  DogFamilyFactory.prototype.getHandOfKing = function () {
    return HandOfKingDog;
  };
  return DogFamilyFactory;
})();

module.exports = new DogFamilyFactory();