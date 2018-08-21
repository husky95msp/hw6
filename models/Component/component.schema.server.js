const mongoose = require('mongoose');

const componentSchema = mongoose.Schema({
  name: String,
  view: {type: mongoose.Schema.Types.ObjectId, ref: 'ViewModel'}
}, {collection: 'component'});
module.exports = componentSchema;
