var KingCat = require('./members/king')
var HandOfKingCat = require('./members/hand-of-king')

var CatFamilyFactory = (function () {
  function CatFamilyFactory() {
  }
  CatFamilyFactory.prototype.getKing = function () {
    return KingCat;
  };
  CatFamilyFactory.prototype.getHandOfKing = function () {
    return HandOfKingCat;
  };
  return CatFamilyFactory;
})();

module.exports = new CatFamilyFactory();