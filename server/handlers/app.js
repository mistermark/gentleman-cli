var express = require('express'),
    og = require('../../lib/log'),
    gHandlers = require('./gman_handlers'),
    env = global.env || require('../env');

var logger = log.logger;
var l4js = log.l4js;
var clientRoot = __dirname + '/../../client';

//filetypes allowed from root client directory
var fileTypes = [
  'js',
  'html',
  'txt',
  'png',
  'xml'
];

//dirs allowed to ba accessed
var dirnames = [
  'css/',
  'img/',
  'js/',
  'lib/'
];

//Api endpoints that can be accessed
var endpoints = [
  'del',
  'config'
];

var wwww = {
  root: clientRoot
};

var app = express();


app.use( l4js.connectLogger(logger, { level: 'auto' }) );

// API Endpoints
app.delete('/api/config', function(req, res){

});

app.post('/api/del', function(req, res){

});

app.get('/', function(req, res){
  res.sendFile('index.html', wwww);
});

/*
 * regexp to allow access to only whitelisted allowed extensions at root directory
 */

var extRe = '^\/(.*?)\.' + reGroup(fileTypes) + '$';

app.get(new RegExp(extRe, 'i'), sendFile);

/*
 * Route that handles GET requires /some_dir
 * If directory isn't whitelisted ( see dirnames var ) then the request 
 * fall through to the 404 route
 *
 * Get regex for allowed folders
 */

var dirRe = '^\/' + reGroup( dirnames ) + '(.+?)';

app.get( new RegExp(dirRe, 'i' ), sendFile );

/*
 * Same as above, except requests that get to this route
 * are to api endpoints that have not been implemented 
 */
var apiRe = '^\/api\/' + reGroup(endpoints) + '\/(.+?)';

 app.all(new RegExp(apiRe, 'i'), function(req, res){
  var response = {
    method: req.method,
    url: req.url,
    status_code: 501,
    status: 'Not Yet Implemented'
  };

  response.message = response.method + " requests to " + response.url + " are not yet supported";

  res.status(response.status_code);
  res.json(response);

 });

/*
 *  Same as the comment below, but for the api endpoint
 *  Will reespond with 400 Bad Request
 */

 app.all('/api/*', function(req, res){
  var response = {
    method: req.method,
    url: req.url,
    status_code: 400,
    status: 'Bad Request',
  };

  response.message = "Resource Unavailable";
  
  res.status(400);
  res.json(response);

 });


/*
 * Routes that are not handled, or atteempts to access no whitelisted files
 * or directories fall through to here, and receive the 404 page
 * Keep this last, so that it will be the last route a request will go to
 */

app.all('/*', function(req, res){
  res.status(404).sendFile('404.html', wwww);
});



//  =========== HELPER FUNCTIONS ==========

/*
 * Returns a list grouped to be used in a RegExp object
 */
function reGroup(filetypes){
  var ext = filetypes.join('|');

  return '(' + ext + ')';
}

/*
 * sends a file to the remote client
 */
function sendFile(req, res, next){
  res.sendFile(req.url, wwww);
  return next;
}

function jsonNYI(req, res, next){
  res.status();
}
module.exports = app;