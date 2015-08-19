'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

global.paths = {
  'html': './src/*.html',
  'js': './src/js/**/*.js',
  'sass': './src/scss/**/*.scss',
  'img': './src/img/*',
  // Sources folder
  'src': './src',
  // Compiled CSS folder
  'css': './src/css',
  'dist': './dist'
};

// Require all tasks in the 'gulp' folder.
requireDir('./gulp', { recurse: false });

// Default task; start local server & watch for changes.
gulp.task('default', ['connect', 'watch']);
