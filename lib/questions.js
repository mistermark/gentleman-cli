/**
 * Module dependencies
 */

var osenv = require('osenv');
var messages = require('./messages');


/**
 * List of questions, directories related
 */

var directories = {
    media: {
        type: "input",
        name: "rootDir",
        message: messages.questions.dirMedia,
        default: osenv.home() + "/Media",
    },
    movies: {
        type: "input",
        name: "moviesDir",
        message: messages.questions.dirMovies,
        default: osenv.home() + "/Media/Movies",
    },
    series: {
        type: "input",
        name: "seriesDir",
        message: messages.questions.dirSeries,
        default: osenv.home() + "/Media/TV Series",
    }
};


/**
 * Confirmation questions
 */
var confirm = {
    delete: {
        type: 'confirm',
        name: 'continue',
        message: messages.questions.confirmDeleteList,
        default: false
    }
};


/**
 * Export it all
 */

module.exports = {
    directories: directories,
    confirm: confirm
};
