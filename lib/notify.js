var clc = require('cli-color');

exports.error = clc.red.bold;
exports.warn = clc.yellow;
exports.notice = clc.whiteBright;
exports.success = clc.green;
exports.dimmed = clc.xterm(240);
