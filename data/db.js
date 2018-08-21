module.exports = function () {
   const mongoose = require('mongoose');
   const databaseName = 'app-dev-mgmt';
   var   connectionString = 'mongodb://localhost:27017/';
   connectionString += databaseName;
   mongoose.connect(connectionString, { useNewUrlParser: true });
};
