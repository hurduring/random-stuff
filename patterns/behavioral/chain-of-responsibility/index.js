var Complaint = (function () {
  function Complaint() {
    this.ComplainingParty = "";
    this.ComplaintAbout = "";
    this.Complaint = "";
  }

  return Complaint;
})();


var ClerkOfTheCourt = (function () {
  function ClerkOfTheCourt() {
  }

  ClerkOfTheCourt.prototype.IsAbleToResolveComplaint = function (complaint) {
    return false;
  };
  ClerkOfTheCourt.prototype.ListenToComplaint = function (complaint) {
    return "";
  };
  return ClerkOfTheCourt;
})();
JudicialSystem.ClerkOfTheCourt = ClerkOfTheCourt;

var King = (function () {
  function King() {
  }

  King.prototype.IsAbleToResolveComplaint = function (complaint) {
    return true;
  };
  King.prototype.ListenToComplaint = function (complaint) {
    return "";
  };
  return King;
})();
JudicialSystem.King = King;


var ComplaintResolver = (function () {
  function ComplaintResolver() {
    this.complaintListeners = [];
    this.complaintListeners.push(new ClerkOfTheCourt());
    this.complaintListeners.push(new King());
  }

  ComplaintResolver.prototype.ResolveComplaint = function (complaint) {
    for (var i = 0; i < this.complaintListeners.length; i++) {
      if (this.complaintListeners[i].IsAbleToResolveComplaint(complaint)) {
        return this.complaintListeners[i].ListenToComplaint(complaint);
      }
    }
  };
  return ComplaintResolver;
})();
