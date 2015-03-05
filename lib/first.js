var fs = require('fs');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');
var nconf = require('nconf');
var _ = require('underscore');
var notify = require('./notify');
var config = require('./config');
var questions = require('./questions');
var messages = require('./messages');
var welcome = require('./welcome');


// Set everything for the first run
var run = function(callback) {

    welcome.message();

    nconf.argv()
       .env()
       .file({ file: config.filePath });

    console.log(messages.strings.firstrun);

    var prompts = [
        questions.directories.media,
        questions.directories.movies,
        questions.directories.series
    ];

    inquirer.prompt(prompts, function(answers) {

        mkdirp(config.dirPath, function(err) {
            if(err) notify.error(err);

            _.each(answers, function(answer, key) {
                nconf.set(key, answer.trim());
            });

            nconf.save(function (err) {
                if(err) notify.error(err);
                console.log(notify.success('%s'), messages.strings.firstrun_success);
                if(callback) callback();
            });

        });

    });

};

//Check if the settings directory exists
var check = function(callback) {
    fs.exists(config.filePath, function(res) {
        if(!res) {
            run(callback);
        } else {
            if(callback) callback();
        }
    });
};

module.exports = {
    run: run,
    check: check
};
