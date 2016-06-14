var HandOfKingCat = (function () {
  function HandOfKingCat() {
  }

  HandOfKingCat.prototype.makeDecision = function () {
    console.log('handOfKingCat decision')
  };
  return HandOfKingCat;
})();

module.exports = new HandOfKingCat();