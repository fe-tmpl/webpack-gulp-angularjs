/**
 * build a `public` folder
 *
 * */
var gulp = require('gulp');
var gutil = require('gulp-util');
var mkdirp = require('mkdirp');
var pathUtil = require('./utils/path-util');

gulp.task('build', function() {
  gutil.log('generating public folder');
  mkdirp.sync(pathUtil.resolve('public/vendor'));
  gutil.log('generating public folder complete');
});