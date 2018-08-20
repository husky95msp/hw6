module.exports = function (app) {
  require ('../data/db.js')();
  const applicationModel = require ('../models/application/application.model.server');
  const componentModel = require('../models/Component/component.model.server');



  // GET
  // /api/application/:aid/component
  // Retrieves all components for application whose primary key is aid

  app.get('/application/:aid/component', findAllComponents);
  function findAllComponents(req, res){
    componentModel.findAllComponents(req.params.aid)
    .then((components)=>res.send(components));
  }




  // POST
  // /api/application/:aid/component
  // Creates a new component for application whose primary key is aid

  app.post('/application/:aid/component', createComponentForApplication);
  function createComponentForApplication(req, res){
    componentModel.createComponent(req.params.aid, req.body)
    .then((component)=>{
      return res.json(component);
    });
  }


  // PUT
  // /api/application/C/component/E
  // Updates component whose primary key is cid with dat in request body

  app.put('/application/:aid/component/:cid', updateComponent);
  function updateComponent(req, res){
    componentModel.updateComponent(req.params.aid, req.params.cid, req.body)
    .then((component)=>res.json(component));
  }




  // DELETE
  // /api/application/C/component/E
  // Deletes component whose primary key is cid

  app.delete('/application/:aid/component/:cid', deleteComponent);
  function deleteComponent(req, res){
    componentModel.deleteComponent(req.params.aid, req.params.cid)
    .then((application)=>res.json(application));
  }

};
