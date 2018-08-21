const mongoose = require('mongoose');

const controllerSchema = mongoose.Schema({
  name: String,
  handlers: [{type: mongoose.Schema.Types.ObjectId, ref: 'HandlerModel'}],
  variables: [{type: mongoose.Schema.Types.ObjectId, ref: 'VariableModel'}],
  services: [{type: mongoose.Schema.Types.ObjectId, ref: 'ServiceModel'}]
}, {collection: 'controller'});
module.exports = controllerSchema;
