const mongoose = require('mongoose');
const developerSchema = mongoose.Schema({
  username: String,
  applications: [{type: mongoose.Schema.Types.ObjectId, ref: 'ApplicationModel'}]
}, {collection: 'developer'});
module.exports = developerSchema;
