const mongoose = require('mongoose');
const componentSchema = mongoose.Schema({
  name: String
}, {collection: 'component'});
module.exports = componentSchema;
