module.exports = function () {
   const mongoose = require('mongoose');
   const databaseName = 'app-dev-mgmt';
   var   connectionString = 'mongodb://localhost/';
   connectionString += databaseName;
   mongoose.connect(connectionString);
};
