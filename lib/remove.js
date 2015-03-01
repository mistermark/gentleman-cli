var findrem = require('find-remove'),
    color = require('cli-color'),
    inquirer = require('inquirer'),
    messages = require('./messages'),
    notify = require('./notify'),
    questions = require('./questions'),
    _ = require('underscore');

module.exports = function(paths, options, callback) {

    console.log('\nThe following list of files/folders are scheduled for demolition:');
    _.each(paths, function(path) {
        console.log('- %s %s %s', path, notify.dimmed('→'), notify.dimmed('"'+options.src +'/'+ path +'"'));
    });
    console.log('');
    inquirer.prompt(questions.confirmDelete, function(answer) {

        if(answer.continue) {
            var removedList = _.each(paths, function(dir, i) {

                var fmOptions = {};
                if(options.dry === 'true') fmOptions.test = options.dry;

                var removedPath = findrem(options.src +'/'+ dir, fmOptions);
            });

            //Successfull removed
            console.log(notify.success('\n%s\n'), messages.strings.success);
            console.log('%s:', messages.strings.successfull_removed);

            //Show the removed file/dir names and their path
            _.each(removedList, function(name) {
                console.log('- %s %s %s', name, notify.dimmed('→'), notify.dimmed('"'+options.src +'/'+ name+'"'));
            });
            console.log('');

            //Callback time
            if(callback) callback(messages.strings.done);
        } else {
            console.log('\nAlright. Better luck next time.');
            process.exit();
        }
    });

};
