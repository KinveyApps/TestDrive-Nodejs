# TestDrive-Nodejs
The TestDrive sample application provides you with a near blank template to get started with. It is great for learning and trying Kinvey, or to build your first application upon.

## Run It
After downloading or cloning the repository:

* Make sure you have installed [Node.js](http://nodejs.org) and [npm](https://npmjs.org).
* Run `npm install`.
* Replace `<your-app-key>` and `<your-app-secret>` (lines 4–5 in `index.js`) with your applications credentials.
* Run `node index.js`.

## Functionality
This application demonstrates:

* Basic set-up for Node.js apps using Kinvey.
* Pinging the service

## Architecture
First, `package.json` contains all metadata of the application. This file also includes the JavaScript library as node module in your project.

All application code is contained in `index.js`. In this sample, the script pings the Kinvey service and terminates.

Node.js is extremely powerful and can certainly do more than just pinging the Kinvey service. The best starting point to develop your Node.js application are the [Node.js Manual & Documentation](http://nodejs.org/api/).