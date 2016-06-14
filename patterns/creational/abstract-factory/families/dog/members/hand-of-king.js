var HandOfKingDog = (function () {
  function HandOfKingDog() {
  }

  HandOfKingDog.prototype.makeDecision = function () {
    console.log('handOfKingDog decision')
  };
  return HandOfKingDog;
})();

module.exports = new HandOfKingDog();