var KingSuccession = (function () {
  function KingSuccession(inLineForThrone) {
    this.inLineForThrone = inLineForThrone;
    this.pointer = 0;
  }

  KingSuccession.prototype.next = function () {
    return this.inLineForThrone[this.pointer++];
  };
  return KingSuccession;
})();

var iterate = new KingSuccession(['derp', 'kerp', 'serp']);

console.log(iterate.next())
console.log(iterate.next())




