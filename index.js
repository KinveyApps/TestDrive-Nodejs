// Import the Kinvey module.
var Kinvey = require('kinvey');
Kinvey.init({
  appKey: '<your-app-key>',
  appSecret: '<your-app-secret>'
});

// Ping Kinvey.
Kinvey.ping({
  success: function(response) {
    console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
  },
  error: function(error) {
    console.log('Kinvey Ping Failed. Response: ' + error.description);
  }
});