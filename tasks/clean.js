/**
 * Demo for cleaning folder/files
 * Usage like `mvn clean` or `gradle clean` in Java way!
 * So you can use `gulp clean` for executing your customize clean tasks
 * */


var gulp = require('gulp');
var gutil = require('gulp-util');
var rimraf = require('gulp-rimraf');
var sequence = require('gulp-sequence');

var pathUtil = require('./utils/path-util');

gulp.task('clean', sequence(['clean:build']));

// sub tasks for clean
gulp.task('clean:build', function() {
  gutil.log('deleting build folder:public');
  return gulp.src(pathUtil.resolve('public')).pipe(rimraf());
});
