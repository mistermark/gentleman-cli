global.env = require('./env');
global.log = require('../lib/log');
var server = require('./handlers/app');

var port = env.port || 1337;
var logger = log.logger;

server.listen( port, function(){
  logger.info( 'Started server on port: ', port );
});