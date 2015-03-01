#!/usr/bin/env node

var program     = require('commander'),
    inquirer    = require('inquirer'),
    osenv       = require('osenv'),
    config      = require('../lib/config'),
    ls          = require('../lib/list'),
    notify      = require('../lib/notify'),
    first       = require('../lib/first'),
    remove      = require('../lib/remove');


var messages = require('../lib/messages');
var firstRun = function() {
    first.check(function(res) {
        console.log(res);
        if (res) return res;
    });
};

// Basic information
program
    .version('0.0.1')
    .description('Managing files from the directory the command is run from.')
    .option("-D, --dryrun", "First check what gets deleted. Nothing is actually deleted.")
    .on('--help', function() {
        console.log('  Examples:');
        console.log('');
        console.log('    $ dfiles delete movies');
        // console.log('    $ dfiles move series'); //@TODO: 
        console.log('');
    });


// Delete a media type
program
    .command('delete [type]')
    .description('delete a type of media')
    // .option("-m, --mode", "Mode to use: single/multiple")
    .action(function(type, options){

        first.check(function() {
            var actionOptions = {
                "src": config.get(type),
                "dry": (program.dryrun === undefined ? 'false' : 'true')
            };

            ls.list(config.get(type), function(err, res) {
                if(err) {
                    console.error(notify.error(messages.errors[err.errno]));
                    process.exit();
                }

                if(res.length < 1) {
                    console.error(notify.error('%s'), messages.strings.empty_dir);
                    process.exit();
                }

                var options = {
                    type: "checkbox",
                    name: "dirs",
                    message: messages.strings.checkbox_choose,
                    choices: res
                };
                inquirer.prompt(options, function(answers) {
                    remove(answers.dirs, actionOptions, function(feedback) {
                        console.log('%s', feedback);
                    });
                });

            });

        });

    });


// Move a media type
// program
//     .command('move [type]')
//     .description('move a type of media')
//     .option("-m, --mode [mode]", "Mode to use: single/multiple")
//     .action(function(env, options){
//         var mode = options.mode || "single";
//         env = env || 'all';
//         console.log('delete \'%s\' type using %s mode', env, mode);
//     });


// Modify config settings
program
    .command('set [setting] [value]')
    .description('Set config options')
    .on('--help', function() {
        console.log('  Example:');
        console.log('');
        console.log('    $ dfiles set moviesDir /homes/dapper-user/Media/Movies');
        console.log('');
    })
    .action(function(setting, value, options){
        first.check(function() {
            config.set(setting, value);
        });
    });


program.parse(process.argv);
