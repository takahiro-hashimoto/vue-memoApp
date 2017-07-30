'use strict';

var gulp = require('gulp');
var style = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var script = require('gulp-concat');

gulp.task('style', function () {
    gulp.src(['./src/css/style.scss'])
    .pipe(style())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dst/css/'));
});

gulp.task('script', function(){
  gulp.src(['./src/script/index.js'])
  .pipe(gulp.dest('./dst/script/'));
});

gulp.task('img', function(){
  gulp.src(['./src/img/*.jpg', './src/img/*.png', './src/img/*.gif'])
  .pipe(gulp.dest('./dst/img/'));
});

gulp.task('watch', function(){
  gulp.watch(['./src/css/*/*.scss', './src/script/*.js'], ['style', 'script']);
});
