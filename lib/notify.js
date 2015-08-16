/**
 * Module dependencies
 */

var clc = require('cli-color');


/**
 * Formatted messages
 */

exports.error = function(mssg) {
    console.log('%s', clc.red.bold(mssg));
};
exports.warn = function(mssg) {
    console.log('%s', clc.yellow(mssg));
};
exports.notice = function(mssg) {
    console.log('%s', clc.whiteBright(mssg));
};
exports.success = clc.green;
exports.dimmed = clc.xterm(240);

exports.debug = function(mssg) {
    console.log('%s', clc.red.bold(mssg));
};
