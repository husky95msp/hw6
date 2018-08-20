const mongoose = require('mongoose');
const componentSchema = require('../Component/component.schema.server');
const applicationSchema = mongoose.Schema({
  name: String,
  components: [componentSchema]
}, {collection: 'application'});
module.exports = applicationSchema;
