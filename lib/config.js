/**
 * Module dependencies
 */

var nconf = require('nconf');
var messages = require('./messages');
var notify = require('./notify');
var osenv = require('osenv');

var dirName = '.gentleman';
var dirPath = osenv.home() + "/" + dirName;
var filePath = dirPath + '/config.json';

nconf.argv()
   .env()
   .file({ file: filePath });


/**
 * Get configuration from store
 * @param  {string} value Name of configuration option
 * @return {string}       Value of configuration option
 */

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


/**
 * Set a configuration option
 * @param {string}   key      Name of option
 * @param {string}   value    Vaule of option
 * @param {Function} callback Continue operation callback
 */
var set = function(key, value, callback) {
    nconf.set(key, value);
    nconf.save(function(err){
        if(callback) callback();
    });
};


/**
 * Expose functions
 * @type {Object}
 */
module.exports = {
    dirName: dirName,
    dirPath: dirPath,
    filePath: filePath,
    get: get,
    set: set
};
