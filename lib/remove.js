var findrem = require('find-remove'),
    color = require('cli-color'),
    messages = require('./messages'),
    notify = require('./notify'),
    _ = require('underscore');

module.exports = function(paths, options, callback) {
    var removedList = _.each(paths, function(dir, i) {

        var fmOptions = {};
        if(options.dry === 'true') fmOptions.test = options.dry;

        var removedPath = findrem(options.src +'/'+ dir, fmOptions);
    });

    //Successfull removed
    console.log(notify.success('\n%s\n'), messages.strings.success);
    console.log('%s:', color.bold(messages.strings.successfull_removed));

    //Show the removed file/dir names and their path
    _.each(removedList, function(name) {
        console.log('- %s %s %s', name, notify.dimmed('→'), notify.dimmed('"'+options.src +'/'+ name+'"'));
    });
    console.log('');

    //Callback time
    if(callback) callback(messages.strings.done);
};
