const mongoose = require('mongoose');
const componentSchema = require('./component.schema.server');

const applicationSchema = require('../application/application.schema.server');
const applicationModel = require('../application/application.model.server');

createComponent = (appId, comp) => {
  return applicationModel.findApplicationById(appId)
  .then((application)=>{
    if(application){
      application.components.push(comp);
      return applicationModel.updateApplication(appId, application);
    }
  })
};
//
findAllComponents = (appId) => {
  return applicationModel.findApplicationById(appId)
  .then((application)=>{
    if(application){
      return application.components;
    }
  })
};
//
// findApplicationById = (appId)=> applicationModel.findById(appId)
//
updateComponent = (appId, compId, newApp) =>{
  return applicationModel.updateApplicationComponent(appId, compId, newApp)
};
//
deleteComponent = (appId, compId) => {
  return applicationModel.findApplicationById(appId)
  .then((application)=>{
    if(application){
      application.components.id(compId).remove();
      return applicationModel.updateApplication(appId, application);
    }
  })
}
module.exports = {
  createComponent,
  findAllComponents,
  updateComponent,
  deleteComponent

};
