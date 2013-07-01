// Import the Kinvey module.
var Kinvey = require('kinvey');

// Initialize Kinvey.
var promise = Kinvey.init({
  appKey    : 'App Key',
  appSecret : 'App Secret'
});

// Ping Kinvey after initialization completes.
promise.then(function() {
  return Kinvey.ping();
}).then(function(response) {
  console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
}, function(error) {
  console.log('Kinvey Ping Failed. Response: ' + error.description);
});