var KingDog = (function () {
  function KingDog() {
  }

  KingDog.prototype.makeDecision = function () {
    console.log('kingDog decision')
  };
  KingDog.prototype.marry = function () {
    console.log('kingDog married')
  };
  return KingDog;
})();

module.exports = new KingDog()