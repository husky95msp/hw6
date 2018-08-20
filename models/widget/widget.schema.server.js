const mongoose = require('mongoose');
const applicationSchema = mongoose.Schema({
  name: String,
  id: String,
  type: String,
  width: Number,
  height:Number,
  size: Number,
  src: String,
  style: String,
  class: String
}, {collection: 'widget'});
module.exports = widgetSchema;
