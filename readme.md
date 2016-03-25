# gulp-todo [![Build Status](https://travis-ci.org/VandeurenGlenn/gulp-todo.svg?branch=master)](https://travis-ci.org/VandeurenGlenn/gulp-todo)

> My stellar gulp plugin


## Install

```
$ npm install --save-dev gulp-todo
```


## Usage

```js
var gulp = require('gulp');
var todo = require('gulp-todo');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(todo())
		.pipe(gulp.dest('dist'));
});
```


## API


## License

MIT © [Glenn Vandeuren](https://github.com/VandeurenGlenn)
