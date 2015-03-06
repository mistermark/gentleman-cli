/**
 * Module dependencies
 */

var fs = require('fs');
var _ = require('lodash');
var notify = require('./notify');
var messages = require('./messages');


/**
 * List files and return to callback
 */

var listFiles = function(dir, callback) {
    // console.log(dir);
    fs.readdir(dir, function(err, files) {
        // if(err) console.error('%s', notify.error(messages.errors[err.code]));
        var fileList = [];
        _.forEach(files, function(file) {
            var isHidden = /^\./.test(file);
            if(!isHidden) {
                fileList.push(file);
            }
        });

        if(callback) callback(err, fileList);
    });
};


/**
 * Expose the whole thing
 */

exports.list = listFiles;
