var Service1 = (function () {
  function Service1(mediator) {
    this.mediator = mediator;
  }

  Service1.prototype.receiveMessage = function (message) {
  };
  Service1.prototype.sendMessage = function (message, type) {
    this.mediator.routeMessage(message, type);
  };
  return Service1;
})();
var Service2 = (function () {
  function Service2(mediator) {
    this.mediator = mediator;
  }

  Service2.prototype.receiveMessage = function (message) {
    console.log('service 2 received', message)
  };
  Service2.prototype.sendMessage = function (message) {
    this.mediator.routeMessage(message, 'food');
  };
  return Service2;
})();


var Mediator = (function () {
  function Mediator(service1, service2) {
  }

  Mediator.prototype.routeMessage = function (message, type) {
    if(type === 'food'){
      this.service2.receiveMessage(message)
    }
  };
  return Mediator;
})();

var med = new Mediator();

var serv1 = new Service1(med);
var serv2 = new Service2(med);

med.service1 = serv1;
med.service2 = serv2;

serv1.sendMessage('we need more food', 'food');