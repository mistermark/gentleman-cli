var fs = require('fs');
var messages = require('../../lib/messages');
var config = {};




config.delete = function(path, cb){
  fs.exists(path, function(exists){
    if(exists){
      fs.unlink(path, function(err){
        var success = null;
        if(!err){
          success = messages.successful_removed + ' ' + path;
        }

        cb(err, success);
      });
    }
  });
};

module.exports = config;