const mongoose = require('mongoose');
const pathSchema = require('./routing.schema.server');
const pathModel = mongoose.model('PathModel', pathSchema);
