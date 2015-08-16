var expect = require('chai').expect;
var fs = require('fs');


var api = require('../server/api/api');


var testdir = __dirname + '/test_data';

describe('API ENDPOINTS', function(){
  before(function(){

    var exists = fs.existsSync(testdir);

    if(!exists){
      fs.mkdir(testdir);
    }

  });

  after(function(){
    var exists = fs.existsSync(testdir);

    if(exists){
      fs.rmdirSync(testdir);
    }
  });

  describe('ENDPOINT api/config', function(){
    var config_path = testdir + '/.gentleman';

    beforeEach(function(){
      var exists = fs.existsSync(config_path);
      if(!exists){
        fs.writeFileSync(config_path);
      }
    });

    it('DELETE api/config should delete the gentleman config file', function(done){
      api.config.delete(config_path, function(err, success){
        expect(success).to.be.ok;

        var exists = fs.existsSync(config_path);

        expect(exists).to.not.be.ok;
        done();
      });
      
    });
  });
});