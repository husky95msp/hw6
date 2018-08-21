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

  app.post('/view/:vid/widget', createWidgetForView);
  function createWidgetForView(req, res){
    widgetModel.createWidgetForView(req.params.vid, req.body)
    .then((widget)=>{
      return res.json(widget);
    });
  }




  // PUT
  // /api/widget/:wid
  // Updates widget whose primary key is wid with data in request body

  app.put('/widget/:wid', updateWidget);
  function updateWidget(req, res){
    widgetModel.updateWidget(req.params.wid, req.body)
    .then((msg)=>res.json(msg));
  }


  // DELETE
  // /api/widget/:wid
  // Deletes widget whose primary key is wid

  app.delete('/widget/:wid', deleteWidget);
  function deleteWidget(req, res){
    widgetModel.deleteWidget(req.params.wid)
    .then((msg)=>res.json(msg));
  }
};
