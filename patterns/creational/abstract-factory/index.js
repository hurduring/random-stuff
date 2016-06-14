var CourtSession = require('./services/court')
var carFamily = require('./families/cat/factory')
var dogFamily = require('./families/dog/factory')

var courtSessionFirst = new CourtSession(carFamily);
courtSessionFirst.complaintPresented({severity: 8});
courtSessionFirst.complaintPresented({severity: 12});

var courtSessionSecond = new CourtSession(dogFamily);
courtSessionSecond.complaintPresented({severity: 8});
courtSessionSecond.complaintPresented({severity: 8});