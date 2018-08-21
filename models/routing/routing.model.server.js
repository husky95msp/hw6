const mongoose = require('mongoose');
const routingSchema = require('./routing.schema.server');
const routingModel = mongoose.model('RoutingModel', routingSchema);
