let db = require('./data/db.js')();

const developerModel = require('./models/developer/developer.model.server');
const applicationModel = require('./models/application/application.model.server');

const newAlice = {
    username: 'aliddffccdia'
};

const Spotify = {
  name: 'Spotify'
}


// applicationModel.createApplication(Spotify);
// developerModel.addApplication('5b707bc56dc84438fd49def1', '5b707bc56dc84438fd49def1');
// developerModel.createDeveloper(alice);

// developerModel.findAllDevelopers().then(devs=>console.log(devs));

// developerModel.updateDeveloper('5b705f4e5dd26d216b9c7121', newAlice)
// .then(status => {
//   console.log(status);
//   return developerModel.findDeveloperById('5b705f4e5dd26d216b9c7121');
// })
// .then(dev => console.log(dev))
