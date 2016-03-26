# gulp-todo-file [![Build Status](https://travis-ci.org/VandeurenGlenn/gulp-todo-file.svg?branch=master)](https://travis-ci.org/VandeurenGlenn/gulp-todo-file)

> My stellar gulp plugin


## Install

```
$ npm install --save-dev gulp-todo-file
```


## Usage

```js
var gulp = require('gulp');
var todos = require('gulp-todo-file');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(todo())
		.pipe(gulp.dest('dist'));
});
```


## API


## License

MIT © [Glenn Vandeuren](https://github.com/VandeurenGlenn)
