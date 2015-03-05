var osenv = require('osenv'),
    messages = require('./messages');

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

var confirm = {
    delete: {
        type: 'confirm',
        name: 'continue',
        message: messages.questions.confirmDeleteList,
        default: false
    }
};

module.exports = {
    directories: directories,
    confirm: confirm
};
