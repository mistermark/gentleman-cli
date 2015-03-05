var findrem = require('find-remove'),
    rimraf = require('rimraf'),
    inquirer = require('inquirer'),
    fs = require('fs'),
    messages = require('./messages'),
    notify = require('./notify'),
    questions = require('./questions'),
    _ = require('lodash');

module.exports = function(paths, options, callback) {

    var fileErr = 1,
        count;

    console.log('\nThe following list of files/folders are scheduled for demolition:');
    _.forEach(paths, function(path) {
        console.log('- %s %s %s', path, notify.dimmed('→'), notify.dimmed('"'+options.src +'/'+ path +'"'));
    });
    console.log('');

    //Notify it's running in dryrun mode
    if(options.dry === true) {
        console.log(notify.success(messages.strings.debug_notice));
        console.log('');
    }

    //Confirm the list pending for deletion
    inquirer.prompt(questions.confirm.delete, function(answer) {

        var listRemoved = [],
            listNotFound = [];

        if(answer.continue) {
            _.forEach(paths, function(dir, i) {

                try {
                    var stats = fs.statSync(options.src +'/'+ dir);

                    if(stats){
                        listRemoved.push({name: dir, path: options.src +'/'+ dir});

                        if(options.dry === false) {
                            rimraf(options.src +'/'+ dir, function(err) {
                                if(err) {
                                    console.error('%s', notify.error(err));
                                    process.exit();
                                }
                            });
                        }

                    }
                }
                catch (err) {
                    listNotFound.push({name: dir, path: options.src +'/'+ dir});
                }

            });


            //All done = Success!
            // console.log(notify.success('\n%s\n'), messages.strings.success);

            if(listRemoved.length > 0) {
                //Successfull removed
                console.log('\n%s:', messages.strings.successfull_removed);

                //Show the removed file/dir names and their path
                _.forEach(listRemoved, function(obj) {
                    console.log('  - %s %s %s', obj.name, notify.dimmed('→'), notify.dimmed('"'+ obj.path +'"'));
                });
                console.log('');
            }

            // Failed to remove (not found)
            if(listNotFound.length > 0) {
                console.log('%s:', messages.strings.failed_removed);

                //Show the removed file/dir names and their path
                _.forEach(listNotFound, function(obj) {
                    console.log('  - %s %s %s', obj.name, notify.dimmed('→'), notify.dimmed('"'+ obj.path +'"'));
                });
                console.log('');
            }

            //Callback time
            if(callback) callback(messages.strings.done);

        } else {

            console.log('\nAlright. Better luck next time.');
            process.exit();

        }
    });

};
