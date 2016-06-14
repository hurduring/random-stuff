var CourtSession = (function () {
  function CourtSession(abstractFactory) {
    this.abstractFactory = abstractFactory;
    this.COMPLAINT_THRESHOLD = 10;
  }

  CourtSession.prototype.complaintPresented = function (complaint) {
    if (complaint.severity < this.COMPLAINT_THRESHOLD) {
      this.abstractFactory.getHandOfKing().makeDecision();
    } else
      this.abstractFactory.getKing().makeDecision();
  };
  return CourtSession;
})();

module.exports = CourtSession;