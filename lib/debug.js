/**
 * Module dependencies
 */

var program         = require('commander');
var messages        = require('./messages');
var notify          = require('./notify');

program.parse(process.argv);


module.exports = function(mssg) {

    console.log(program.args);

    notify.debug(mssg);

};


/**
 * Export the whole thing
 */

// module.exports = {
//     debug: debug
// };
