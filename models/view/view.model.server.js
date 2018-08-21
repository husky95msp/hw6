const mongoose = require('mongoose');
const viewSchema = require('./view.schema.server');
// const applicationModel = mongoose.model('ApplicationModel', applicationSchema);
const viewModel = mongoose.model('ViewModel', viewSchema);
const componentModel = require('../Component/Component.model.server');
createViewForComponent = (compId, view) =>
  viewModel.create(view).then((view)=>
  componentModel.findComponentById(compId)
    .then(comp =>{
      comp.view = view._id
      return comp.save().then( t => t.populate('view').execPopulate());
    }))

findAllViewsForComponent = (compId) => componentModel.findComponentById(compId).then((component)=> component.view);

findViewById = (vId)=> viewModel.findById(vId).populate('widgets').exec()
//
updateView = (viewId, newView) =>{
  return viewModel.update({_id: viewId}, {
    $set: newView
  }).then((resp)=> console.log(resp));
}
deleteView = viewId => viewModel.remove({_id: viewId})
//
// updateApplicationComponent = (appId, compId, newApp) =>
//   applicationModel.update({_id: appId, 'components._id': compId}, {
//     $set: {'components.$.name':newApp.name}
//   });
module.exports = {
  createViewForComponent,
  findAllViewsForComponent,
  updateView,
  deleteView,
  findViewById
};
