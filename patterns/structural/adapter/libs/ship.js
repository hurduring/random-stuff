function Ship() {
  this.SetRudderAngleTo = function (n) {
    console.log('rudder angle to', n)
  }
  this.SetSailAngle = function (a,b) {
    console.log('set sail angle', a, b)
  }
  this.complexSomething = function () {
    console.log('complex something')
  }
}

module.exports = Ship;