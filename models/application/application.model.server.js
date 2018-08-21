const mongoose = require('mongoose');
const applicationSchema = require('./application.schema.server');
const applicationModel = mongoose.model('ApplicationModel', applicationSchema);
// const componentModel = require('../Component/component.server');

createApplication = app => applicationModel.create(app)

findAllApplications = () => applicationModel.find().populate('components').exec()


 findApplicationById = (appId)=>{

    return applicationModel.findById(appId).populate('components').exec()

  }

updateApplication = (appId, newApp) =>{

  return applicationModel.update({_id: appId}, {
    $set: newApp
  }).then((resp)=> console.log(resp));
}

// deleteApplication = appId =>
//   findAById(appId)
//   .then((app)=>app.components.map((comp)=>componentModel.deleteComponent(appId, comp._id)))
//   .then (()=>applicationModel.remove({_id: appId}))

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
