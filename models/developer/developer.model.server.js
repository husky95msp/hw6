const mongoose = require('mongoose');
const developerSchema = require('./developer.schema.server');
const developerModel = mongoose.model('DeveloperModel', developerSchema);
const applicationModel = require ('../application/application.model.server');

createDeveloper = developer => developerModel.create(developer)

findAllDevelopers = () => {

  return developerModel.find().populate({path:'applications', select: 'name'}).exec()
}
findDeveloperById = (devId)=> developerModel.findById(devId).populate({path:'applications', select: 'name'}).exec()

updateDeveloper = (devId, newDev) =>
  developerModel.update({_id: devId}, {
    $set: newDev
  });

addApplication = (devId, appId)=>
  developerModel.findById(devId)
    .then(dev =>{
      dev.applications.push(appId);
      return dev.save();
    });

deleteDeveloper = devId => developerModel.remove({_id: devId})

module.exports = {
  createDeveloper,
  findAllDevelopers,
  findDeveloperById,
  updateDeveloper,
  addApplication,
  deleteDeveloper
};
