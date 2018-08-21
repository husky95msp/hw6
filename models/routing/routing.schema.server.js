const mongoose = require('mongoose');

const routingSchema = mongoose.Schema({
  name: String,
  component: {type: mongoose.Schema.Types.ObjectId, ref: 'ComponentModel'}
}, {collection: 'routing'});
module.exports = routingSchema;
