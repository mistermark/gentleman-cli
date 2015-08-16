/*
 * exports logger (log4js)
 * author: Gabs00 ( gewen87@gmail.com )
 * filename: log.js
 *
 * 
 * ====================
 * Module dependencies
 */
var log4js = require('log4js');

var getLogger = function(){
  var env = global.env || require('../server/env');

  var envl4js = env.l4jsConfig;

  //Default config

  var l4jsConfig = envl4js || {
    "appenders": [{
      "type": "file",
      "filename": "~/.gentleman/logs/gentleman.log",
      "maxLogSize": 20480,
      "backups": 3,
      "category": "relative-logger"
    }, {
      'type': 'console'
    }]
  };

  log4js.configure(l4jsConfig);

  log4js.loadAppender('file');
  log4js.addAppender(log4js.appenders.file('gentleman.log'), 'gentleman');

  var logger = log4js.getLogger();
  logger.setLevel(env.loglevel);

  return logger;
};

module.exports = {
  logger: global.logger || getLogger(),
  l4js: global.log4js || log4js
};