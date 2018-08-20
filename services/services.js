module.exports = function (app) {
var developerService = require('./developer.service.server')(app);
var applicationService = require('./application.service.server')(app);
var componentService = require('./component.service.server')(app);
};
