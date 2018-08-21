const mongoose = require('mongoose');
// const widgetSchema = require('../widget/widget.schema.server');
const viewSchema = mongoose.Schema({
  name: String,
  widgets: [{type: mongoose.Schema.Types.ObjectId, ref: 'WidgetModel'}]
}, {collection: 'view'});
module.exports = viewSchema;
