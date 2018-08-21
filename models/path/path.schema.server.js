const mongoose = require('mongoose');

const pathSchema = mongoose.Schema({
  name: String,
  path: String,
  pathParameters: [{type: mongoose.Schema.Types.ObjectId, ref: 'ParameterModel'}]
}, {collection: 'path'});
module.exports = pathSchema;
