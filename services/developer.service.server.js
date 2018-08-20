module.exports = function (app) {
  require ('../data/db.js')();
  const developerModel = require ('../models/developer/developer.model.server');


  // GET
  // /api/developer
  // Retrieves all the developers
  app.get('/developer', findAllDevelopers);
  function findAllDevelopers(req, res){
    developerModel.findAllDevelopers()
    .then((devs)=>res.send(devs));
  }


  // POST
  // /api/developer
  // Creates a new developer with the data past in request body
  app.post('/developer', createDeveloper);
  function createDeveloper(req, res){
    developerModel.createDeveloper(req.body)
    .then((dev)=>res.json(dev));
  }


  // GET
  // /api/developer/:did
  // Retrieves a developer whose _id is did
  app.get('/developer/:did', findDeveloperById);
  function findDeveloperById(req, res){
    developerModel.findDeveloperById(req.params.did)
    .then((dev)=>res.send(dev));
  }


  // PUT
  // /api/developer/:did
  // Updates a developer whose _id is did, updating the developer's properties with the data past in request body
  app.put('/developer/:did', updateDeveloper);
  function updateDeveloper(req, res){
    developerModel.updateDeveloper(req.params.did, req.body)
    .then((dev)=>res.json(dev));
  }


  // DELETE
  // /api/developer/:did
  // Removes a developer whose _id is did
  app.delete('/developer/:did', deleteDeveloper);
  function deleteDeveloper(req, res){
    developerModel.deleteDeveloper(req.params.did)
    .then((dev)=>res.json(dev));
  }

};
