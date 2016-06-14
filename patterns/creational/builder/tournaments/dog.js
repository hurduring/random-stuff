var Tournament = require('../events/tournament');
var Event = require('../products/event')
var Attendee = require('../products/attendee')

var DogTournamentBuilder = (function () {
  function DogTournamentBuilder() {
  }

  DogTournamentBuilder.prototype.build = function () {
    var tournament = new Tournament();
    tournament.events.push(new Event("Joust"));
    tournament.events.push(new Event("Melee"));
    tournament.attendees.push(new Attendee("Good Boy"));
    tournament.attendees.push(new Attendee("Bad Boy"));
    return tournament;
  };
  return DogTournamentBuilder;
})();

module.exports = DogTournamentBuilder;