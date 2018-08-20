const mongoose = require('mongoose');
const widgetSchema = require('../widget/widget.schema.server');
const viewSchema = mongoose.Schema({
  name: String,
  widgets: [widgetSchema]
}, {collection: 'view'});
module.exports = viewSchema;
