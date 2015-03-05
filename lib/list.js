var fs = require('fs');
var _ = require('lodash');
var notify = require('./notify');
var messages = require('./messages');

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

exports.list = listFiles;
