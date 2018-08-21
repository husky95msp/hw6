const mongoose = require('mongoose');
const componentSchema = require('./component.schema.server');
const componentModel = mongoose.model('ComponentModel', componentSchema);
let applicationModel = require('../application/application.model.server');


createComponent = (appId, comp) => {

  return componentModel.create(comp).then((component)=>{
    return applicationModel.findApplicationById(appId)
    .then((application)=>{
      if(application){
        application.components.push(component._id);

        applicationModel.updateApplication(appId, application);
        return component;
      }
      return this;
    });
  });
};


findComponentById = (compId) => componentModel.findById(compId).populate('view').exec();
findAllComponents = (appId) => {

  return applicationModel.findApplicationById(appId)
  .then((application)=>{
    if(application){
      return application.components
    }
  })
};
//
// findApplicationById = (appId)=> applicationModel.findById(appId)
//
updateComponent = (appId, compId, newComp) =>{
  return componentModel.update({_id: compId}, {
    $set: newComp
  });
  // return applicationModel.updateApplicationComponent(appId, compId, newApp)
};
deleteApplication=(appId)=>{
  return applicationModel.findApplicationById(appId)
  .then((app)=> componentModel.remove({id: {$in: app.components.map((c)=>c._id)}}))
}
//
deleteComponent = (appId, compId) => componentModel.remove({_id: compId});
module.exports = {
  createComponent,
  findAllComponents,
  updateComponent,
  deleteComponent,
  findComponentById,
  deleteApplication
};
