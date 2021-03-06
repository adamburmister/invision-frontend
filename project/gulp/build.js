'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var exec = require('child_process').execSync;
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var runSeq = require('run-sequence').use(gulp);
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var neat = require('node-neat').includePaths;
var bourbon = require('node-bourbon').includePaths;
var deploy = require('gulp-gh-pages');

// One build task to rule them all.
gulp.task('build', function (done) {
  runSeq('clean', ['buildsass', 'buildimg', 'buildjs', 'copyfonts'], 'buildhtml', 'deploy', done);
});

var sassOptions = {
  includePaths: [global.paths.sass].concat(neat, bourbon)
};

// Build SASS for distribution.
gulp.task('buildsass', function () {
  return gulp.src(global.paths.sass)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(minifyCss())
  	.pipe(rename({
  		suffix: '.min'
  	}))
    .pipe(gulp.dest(global.paths.dist + '/css'));
});

gulp.task('copyfonts', function(){
  return gulp.src(global.paths.fonts)
    .pipe(gulp.dest(global.paths.dist + '/fonts'));
});

// Build JS for distribution.
gulp.task('buildjs', function () {
  exec('npm run buildjs', function (err, stdout, stderr) {
    if (err) {
      throw err;
    }
    else {
      console.log('Build complete!');
    }
  });
});

// Build HTML for distribution.
gulp.task('buildhtml', function () {
  return gulp.src(global.paths.html)
    .pipe(replace('css/app.css', 'css/app.min.css'))
    .pipe(replace('lib/system.js', 'js/app.min.js'))
    .pipe(replace('<script src="config.js"></script>', ''))
    .pipe(replace("<script>System.import('./js/app')</script>", ''))
    .pipe(minifyHtml())
    .pipe(gulp.dest(global.paths.dist));
});

// Build images for distribution.
gulp.task('buildimg', function () {
  return gulp.src(global.paths.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(global.paths.dist + '/img'));
});

// Push to gh-pages
gulp.task('deploy', function () {
  return gulp.src(global.paths.dist + '/{*,**/*}')
    .pipe(deploy())
});
