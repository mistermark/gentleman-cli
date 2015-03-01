var nconf = require('nconf'),
    messages = require('./messages'),
    notify = require('./notify'),
    osenv = require('osenv');

var dirName = '.dfiles';
var dirPath = osenv.home() + "/" + dirName;
var filePath = dirPath + '/config.json';

nconf.argv()
   .env()
   .file({ file: filePath });

var get = function(value) {
    var returnValue;
    switch(value) {
        case "movies":
            returnValue = nconf.get('moviesDir');
        break;
        case "series":
            returnValue = nconf.get('seriesDir');
        break;
    }
    return returnValue;
};

var set = function(key, value) {
    nconf.set(key, value);
    nconf.save(function(err){
        console.log(notify.success('%s'), messages.strings.update_success);
    });
};

module.exports = {
    dirName: dirName,
    dirPath: dirPath,
    filePath: filePath,
    get: get,
    set: set
};