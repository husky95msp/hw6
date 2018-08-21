const mongoose = require('mongoose');
const widgetSchema = require('./widget.schema.server');
const widgetModel = mongoose.model('WidgetModel', widgetSchema);
// let applicationModel = require('../application/application.model.server');
let viewModel = require('../view/view.model.server');


createWidgetForView = (viewId, wid) => {

  return widgetModel.create(wid).then((w)=>{
    return viewModel.findViewById(viewId)
    .then((view)=>{
      if(view){
        view.widgets.push(w._id);

        viewModel.updateView(viewId, view);
        return w;
      }
      return this;
    });
  });
};


findWidgetById = (id) => widgetModel.findById(id)
findAllWidgetsForView = (viewId) => {

  return viewModel.findViewById(viewId)
  .then((view)=>{
    if(view){
      return view.widgets
    }
  })
};

updateWidget = (wId, newWid) =>{
  return widgetModel.update({_id: wId}, {
    $set: newWid
  });
  // return applicationModel.updateApplicationComponent(appId, compId, newApp)
};
//
deleteWidget = (wId) =>widgetModel.remove({_id: wId});
module.exports = {
  createWidgetForView,
  findAllWidgetsForView,
  updateWidget,
  deleteWidget,
  findWidgetById
};
