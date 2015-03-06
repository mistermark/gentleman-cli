/**
 * Module dependencies
 */

var async = require('async');
var mkdirp = require('mkdirp');


/**
 * Test directories
 */
var dirs = [
    "temp/Movies/Ornare Vestibulum Adipiscing",
    "temp/Movies/Ornare Vestibulum Adipiscing/Elit Pellentesque",
    "temp/Movies/Vehicula Magna Ultricies",
    "temp/Movies/Fusce Ornare Tortor",
    "temp/Movies/Fusce Ornare Tortor/Pellentesque Dapibus",
    "temp/Movies/Quam Nullam Etiam",
    "temp/Movies/Venenatis Sit Magna",
    "temp/Movies/Venenatis Sit Magna/Risus Ipsum",
    "temp/Movies/Sem Lorem Egestas",
    "temp/Movies/Cras Elit Sit",
    "temp/Movies/Cursus Adipiscing Consectetur",
    "temp/TV_Series/Ornare Vestibulum Adipiscing",
    "temp/TV_Series/Vehicula Magna Ultricies",
    "temp/TV_Series/Fusce Ornare Tortor",
    "temp/TV_Series/Quam Nullam Etiam",
    "temp/TV_Series/Venenatis Sit Magna",
    "temp/TV_Series/Sem Lorem Egestas",
    "temp/TV_Series/Cras Elit Sit",
    "temp/TV_Series/Cursus Adipiscing Consectetur",
];

/**
 * Create the folders
 */
async.map(dirs, mkdirp, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Sandwich is ready.");
    }
});
