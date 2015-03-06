/**
 * Module dependencies
 */

var clc         = require('cli-color');
var pkgjson     = require('../package.json');
var messages    = require('./messages.js');


/**
 * Welcome message
 * @return {string} Compiled text
 */

exports.message = function() {
    console.log(messages.ascii.bowtie32.join('\n'));
    console.log('');
    console.log(clc.green(pkgjson.title));
    console.log(pkgjson.description);
    console.log('\nCurrent version: v' + pkgjson.version);
    console.log('\nHomepage: ' + pkgjson.homepage);
    console.log('Report bugs: ' + pkgjson.bugs.url);
    console.log('');
};
