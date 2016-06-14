var KingCat = (function () {
  function KingCat() {
  }

  KingCat.prototype.makeDecision = function () {
    console.log('kingCat decision')
  };
  KingCat.prototype.marry = function () {
    console.log('kingCat married')
  };
  return KingCat;
})();

module.exports = new KingCat()