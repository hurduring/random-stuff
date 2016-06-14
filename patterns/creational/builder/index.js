var TournamentBuilder = require('./directors/director-1')
var DogTournament = require('./tournaments/dog')

var tournament = new TournamentBuilder().build(new DogTournament());
console.log(tournament)
