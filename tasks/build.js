/**
 * TODO: Add task clean before calling build task (suppose using sequence)
 * */
var gulp = require('gulp');
var gutil = require('gulp-util');
var sequence = require('gulp-sequence');
var webpack = require('webpack');

var webpackProdConfig = require('./config/webpack.prod.config');

gulp.task('build', sequence(
    ['clean'],
    ['webpack:production']
));

gulp.task('webpack:production', function(done) {
  webpack(webpackProdConfig, function(error, stats) {
    if (error) {
      throw new gutil.PluginError('webpack', error);
    }
    gutil.log('webpack bundling complete.');
    gutil.log(stats.toString(webpackProdConfig.stats));
    done();
  });
});