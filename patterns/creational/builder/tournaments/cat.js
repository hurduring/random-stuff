var Tournament = require('../events/tournament');
var Event = require('../products/event')
var Attendee = require('../products/attendee')
var Prize = require('../products/prize')

var CatTournamentBuilder = (function () {
  function CatTournamentBuilder() {
  }

  CatTournamentBuilder.prototype.build = function () {
    var tournament = new Tournament();
    tournament.events.push(new Event("Joust"));
    tournament.events.push(new Event("Melee"));
    tournament.attendees.push(new Attendee("Kitty"));
    tournament.prizes.push(new Prize("Gold"));
    tournament.prizes.push(new Prize("More Gold"));
    return tournament;
  };
  return CatTournamentBuilder;
})();

module.exports = CatTournamentBuilder;