var fs = require('fs'),
    mkdirp = require('mkdirp'),
    inquirer = require('inquirer'),
    nconf = require('nconf'),
    _ = require('underscore'),
    notify = require('./notify'),
    config = require('./config'),
    questions = require('./questions'),
    messages = require('./messages');


// Set everything for the first run
var run = function(callback) {

    nconf.argv()
       .env()
       .file({ file: config.filePath });

    console.log(notify.notice(messages.strings.firstrun));

    var prompts = [
        questions.rootDir,
        questions.moviesDir,
        questions.seriesDir
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
            callback();
        }
    });
};

module.exports = {
    run: run,
    check: check
};
