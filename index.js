'use strict';

const util = require('util');

let opts = {
	id: '',
	date: true,
	separator: '-',
	quietMode: false,
	priority: 5         // By default, all messages > 5 are displayed
};

const init = function (options) {
	opts = options;
};

// Set quiet mode
const isDev = function (bool) {
	if (bool === true) {
		opts.quietMode = false;
	} else {
		opts.quietMode = true;
	}
};

const setPriority = function (priority) {
	opts.priority = priority;
};

/*
 * Log() Sending a beautiful and powerful console.log()-like 🔋
 * string: message you want to display
 * priority: priority of the current log, to compare with the main level
 */
const log = function (string, priority) {
  priority = priority || 10;
	if (priority >= opts.priority) {
		if (opts.quietMode === false) {
			let r = '';

			if (opts.id !== '') {
				r = util.format(opts.id, opts.separator);
			}

			if (opts.date === true) {
				const getDate = new Date().toISOString().replace(/T/, ' ').substr(0, 19);
				r = util.format(r, getDate, opts.separator);
			}

			r = util.format(r, string);

			console.log(r);
		}
	}
};

module.exports = init;
module.exports.log = log;
module.exports.setPriority = setPriority;
module.exports.isDev = isDev;
