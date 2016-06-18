var FibonacciIterator = (function () {
  function FibonacciIterator() {
    this.previous = 1;
    this.beforePrevious = 1;
  }

  FibonacciIterator.prototype.next = function () {
    var current = this.previous + this.beforePrevious;
    this.beforePrevious = this.previous;
    this.previous = current;
    return current;
  };
  return FibonacciIterator;
})();

var iterator = new FibonacciIterator();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())