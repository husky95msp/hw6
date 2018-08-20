////////////////////////////////////////////////////////////////////////////////
// BASE SETUP

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

////////////////////////////////////////////////////////////////////////////////
// ROUTES FOR OUR API
var router = express.Router();              // get an instance of the express Router
require('./services/services')(router);

router.get('/hello', function(req, res){
res.json({hello: 'from the server'});
});

////////////////////////////////////////////////////////////////////////////////
// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api

app.use('/api', router);

////////////////////////////////////////////////////////////////////////////////
// START THE SERVER

app.listen(port);
console.log('API active on port:  ' + port);

////////////////////////////////////////////////////////////////////////////////
