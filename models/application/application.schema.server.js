const mongoose = require('mongoose');
const applicationSchema = mongoose.Schema({
  name: String,
  components: [{type: mongoose.Schema.Types.ObjectId, ref: 'ComponentModel'}]
}, {collection: 'application'});
module.exports = applicationSchema;
