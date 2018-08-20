module.exports = function (app) {
  require ('../data/db.js')();
  const widgetModel = require ('../models/widget/widget.model.server');


  // GET
  // /api/view/:vid/widget
  // Retrieves all widgets for view whose primary key is vid

  app.get('/view/:vid/widget', findAllWidgetsForView);
  function findAllWidgetsForView(req, res){
    widgetModel.findAllWidgetsForView(req.params.vid)
    .then((widgets)=>res.send(widgets));
  }


  // POST
  // /api/view/:vid/widget
  // Creates a new widget for view whose primary key is vid

  app.post('/component/:cid/view', createViewForComponent);
  function createViewForComponent(req, res){
    viewModel.createViewForComponent(req.params.cid, req.body)
    .then((view)=>{
      return res.json(view);
    });
  }




  // PUT
  // /api/widget/:wid
  // Updates widget whose primary key is wid with data in request body

  app.put('/view/:vid', updateView);
  function updateView(req, res){
    viewModel.updateView(req.params.vid)
    .then((msg)=>res.json(msg));
  }


  // DELETE
  // /api/widget/:wid
  // Deletes widget whose primary key is wid

  app.delete('/view/:cid', deleteView);
  function deleteView(req, res){
    viewModel.deleteView(req.params.vid)
    .then((msg)=>res.json(msg));
  }

};
