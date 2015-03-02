var clc = require('cli-color');

var tick = clc.green("✓ ");
var cross = clc.red("✗ ");

exports.errors = {
    "34": "File or directory not found.",
    "ENOENT": "File or directory not found.",
    "13": "Permission to this file or directory is denied."
};
exports.strings = {
    "firstrun": "This is the first time you\'re running this.\nPlease take the time to set up your configuration.",
    "firstrunComplete": "Your config file has been created. Please restart the process.",
    "firstrun_later": "Alright. Maybe when you have some more time then. Bye!",
    "firstrun_mkdir": "The directory doesn\'t exist. I'll create it for you.",
    "firstrun_success": 'Now we\'re all set. Let\'s continue...\n',
    "checkbox_choose": "Choose the directories/files you wish to delete:",
    "confirm_continue": "Do you want to continue?",
    "input_qPath": "Please fill in the path to your configuration file directory:\n",
    "done": "→ Bob\'s your uncle.",
    "success": "✪ Success!",
    "update_success": tick + "Configuration successfully updated.",
    "successfull_removed": tick + "The following directories/files were successfully deleted",
    "failed_removed": cross + "The following directories/files couldn\'t be removed",
    "empty_dir": cross + "Ooops! This directory is empty.",
    "debug_notice": "You\'re running in \'dryrun\' mode. Nothing will be deleted. It\'s only a simulation."
};

exports.questions = {
    "dirMedia": "Path to your Media directory:",
    "dirMovies": "Path to your Movies directory:",
    "dirSeries": "Path to your TV Series directory:",
    "confirmDeleteList": "Are you sure you want to delete these files?"
};

// exports.messages = messages;
