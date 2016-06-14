function Singleton() {
  var number = 0;
  var instance = null;
  return function () {
    if (instance) return instance;

    instance = {
      change: function (a) {
        number = number + a;
        return number;
      },
      getNumber: function () {
        return number;
      }
    };
    return instance;
  }
}

(function run() {
  var SingletonInstance = Singleton();

  var instance1 = SingletonInstance()
  var instance2 = SingletonInstance()

  console.log("Same instance? " + (instance1 === instance2));
})();