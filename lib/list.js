var fs = require('fs');

var listFiles = function(dir, callback) {
    fs.readdir(dir, function(err, files) {
        if(callback) callback(err, files);
    });
};

exports.list = listFiles;
