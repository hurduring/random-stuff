var TournamentBuilder = (function () {
  function TournamentBuilder() {
  }

  TournamentBuilder.prototype.build = function (builder) {
    return builder.build();
  };
  return TournamentBuilder;
})();

module.exports = TournamentBuilder;