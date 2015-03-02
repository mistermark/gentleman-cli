var fs = require('fs'),
    _ = require('lodash');

var listFiles = function(dir, callback) {
    fs.readdir(dir, function(err, files) {
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
