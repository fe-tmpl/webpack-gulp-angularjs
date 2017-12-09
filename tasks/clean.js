/**
 * Demo for cleaning folder/files
 * Usage like `mvn clean` or `gradle clean` in Java way!
 * So you can use `gulp clean` for executing your customize clean tasks
 * */


var gulp = require('gulp');
var gutil = require('gulp-util');
var rimraf = require('gulp-rimraf');
var sequence = require('gulp-sequence');

var baseConfig = require('./config/base.config');
var pathUtil = require('./utils/path-util');

gulp.task('clean', sequence(
    ['clean:build'],
    ['clean:dist']
));

// sub tasks

gulp.task('clean:build', function() {
  gutil.log('deleting build folder:public');
  return gulp.src(baseConfig.dir.build).pipe(rimraf());
});

gulp.task('clean:dist', function() {
  gutil.log('deleting build folder:public');
  return gulp.src(baseConfig.dir.dist).pipe(rimraf());
});