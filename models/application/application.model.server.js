const mongoose = require('mongoose');
const applicationSchema = require('./application.schema.server');
const applicationModel = mongoose.model('ApplicationModel', applicationSchema);

createApplication = app => applicationModel.create(app)

findAllApplications = () => applicationModel.find()

findApplicationById = (appId)=> applicationModel.findById(appId)

updateApplication = (appId, newApp) =>
  applicationModel.update({_id: appId}, {
    $set: newApp
  });

deleteApplication = appId => applicationModel.remove({_id: appId})

updateApplicationComponent = (appId, compId, newApp) =>
  applicationModel.update({_id: appId, 'components._id': compId}, {
    $set: {'components.$.name':newApp.name}
  });
module.exports = {
  createApplication,
  findAllApplications,
  findApplicationById,
  updateApplication,
  deleteApplication,
  updateApplicationComponent
};
