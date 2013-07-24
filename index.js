/**
 * Copyright 2013 Kinvey, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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