module.exports = function (app) {
  require ('../data/db.js')();
  const applicationModel = require ('../models/application/application.model.server');
  const developerModel = require('../models/developer/developer.model.server');


  // GET
  // /api/application
  // Retrieves all the applications including only their names
  app.get('/application', findAllApplications);
  function findAllApplications(req, res){
    applicationModel.findAllApplications()
    .then((apps)=>res.send(apps));
  }




  // POST
  // /api/developer/:did/application
  // Creates a new application developed by developer whose primary key is did

  app.post('/developer/:did/application', createApplicationForADeveloper);
  function createApplicationForADeveloper(req, res){
    applicationModel.createApplication(req.body)
    .then((app)=>{
      developerModel.addApplication(req.params.did, app._id);
      return res.json(app);
    });
  }



  // GET
  // /api/developer/:did/application
  // Retrieves all the applications developed by developer whose primary key is did. Only the application names are retrieved

  app.get('/developer/:did/application', findAllApplicationsForADeveloper);
  function findAllApplicationsForADeveloper(req, res){
      developerModel.findDeveloperById(req.params.did)
      .then((dev)=>res.json(dev.applications));
  }



  // PUT
  // /api/application/:aid
  // Updates application whose primary key is aid
  app.put('/application/:aid', updateApplication);
  function updateApplication(req, res){
    applicationModel.updateApplication(req.params.aid, req.body)
    .then((application)=>res.json(application));
  }



  // DELETE
  // /api/application/:aid
  // Deletes application whose primary key is aid. All related services, components, and routings are also removed.
  app.delete('/application/:aid', deleteApplication);
  function deleteApplication(req, res){
    applicationModel.deleteApplication(req.params.aid)
    .then((application)=>res.json(application));
  }

};
