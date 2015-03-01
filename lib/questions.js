var osenv = require('osenv'),
    messages = require('./messages');

var rootDir = {
    type: "input",
    name: "rootDir",
    message: messages.questions.dirMedia,
    default: osenv.home() + "/Media",
};

var moviesDir =  {
    type: "input",
    name: "moviesDir",
    message: messages.questions.dirMovies,
    default: osenv.home() + "/Media/Movies",
};

var seriesDir =  {
    type: "input",
    name: "seriesDir",
    message: messages.questions.dirSeries,
    default: osenv.home() + "/Media/TV Series",
};

var confirmDelete = {
    type: 'confirm',
    name: 'continue',
    message: messages.questions.confirmDeleteList,
    default: false
};

module.exports = {
    rootDir: rootDir,
    moviesDir: moviesDir,
    seriesDir: seriesDir,
    confirmDelete: confirmDelete
};
