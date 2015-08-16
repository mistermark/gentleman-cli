var nodeEnv = process.env.NODE_ENV;

global.env = {};

var devlogdir =__dirname + '/../';
var prodlogdir = '~/.gentleman/logs/';
var logfilename = 'gentleman.log';


env.development = {
  port: 1337,
  logLevel: 'INFO',
  logdir: devlogdir,
  logfile: logfilename,
  l4jsConfig: {
    "appenders": [
      // {
      //   "type": "file",
      //   "filename": devlogdir + logfilename,
      //   "maxLogSize": 20480,
      //   "backups": 5,
      //   "category": "relative-logger"
      // }, 
      {
        'type': 'console'
      },
      {
        "type": "dateFile",
        "filename": devlogdir + logfilename,
        "pattern": "-yyyy-MM-dd",
        "alwaysIncludePattern": false
      } 
    ]
  }
};


env.production = { 
  port: 8900,   //This value will actually be set in the production environment using an environment variable
  logLevel: 'warn',
  logdir: prodlogdir,
  logfile: logfilename,
  l4jsConfig: {
    "appenders": [{
      "type": "file",
      "filename": prodlogdir + logfilename,
      "maxLogSize": 20480,
      "backups": 5,
      "category": "relative-logger"
    }, {
      'type': 'console'
    } ]
  }
};

module.exports = env[nodeEnv];
