'use strict';
var gutil = require('gulp-util');
var through = require('through2');

function match(file, exp) {
  if (exp.length > 1) {
    for (var i = 0; i < exp.length; i++) {
      if (String(file.contents).match(exp[i]) !== null) {
        return String(file.contents).match(exp[i]);
      }
    }
  }
  return String(file.contents).match(exp);
}

module.exports = function () {

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-todo-file', 'Streaming not supported'));
			return;
		}

		try {
			var result = match(file, [/<!-- TODO(.*)-->/g, /\/* TODO(.*) *\//g]);
      if (result) {
        if (String(result).includes('*/')) {
          result = String(result).replace('*/', '');
        } else if (String(result).includes('<!--')) {
          result = String(result).replace('<!--', '');
          result = String(result).replace('-->', '');
        }
        result = String(result).replace('TODO:', '');
        file.contents = new Buffer([result].join(','));
        return cb(null, file);
      }
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-todo-file', err));
		}

		cb(null, null);
	});
};
