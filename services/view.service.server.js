module.exports = function (app) {
  require ('../data/db.js')();
  const viewModel = require ('../models/view/view.model.server');
  
  // GET
  // /api/component/:cid/view
  // Retrieves all views for component whose primary key is cid
  //
  app.get('/component/:cid/view', findAllViewsForComponent);
  function findAllViewsForComponent(req, res){
    viewModel.findAllViewsForComponent(req.params.cid)
    .then((views)=>res.send(views));
  }

  // POST
  // /api/component/:cid/view
  // Creates a new view for component whose primary key is cid

  app.post('/component/:cid/view', createViewForComponent);
  function createViewForComponent(req, res){
    viewModel.createViewForComponent(req.params.cid, req.body)
    .then((view)=>{
      return res.json(view);
    });
  }



  // PUT
  // /api/view/:vid
  // Updates view whose primary key is vid with data in request body

  app.put('/view/:vid', updateView);
  function updateView(req, res){
    viewModel.updateView(req.params.vid, req.body)
    .then((msg)=>res.json(msg));
  }



  // DELETE
  // /api/view/:vid
  // Deletes view whose primary key is vid

  app.delete('/view/:vid', deleteView);
  function deleteView(req, res){
    viewModel.deleteView(req.params.vid)
    .then((msg)=>res.json(msg));
  }
};
