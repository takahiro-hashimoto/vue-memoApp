'use strict';

var gulp = require('gulp');
var style = require('gulp-sass');
var cmq = require('gulp-combine-media-queries');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var script = require('gulp-concat');

gulp.task('style', function () {
    gulp.src(['./src/css/style.scss'])
    .pipe(style())
    .pipe(autoprefixer())
    .pipe(cmq())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dst/css/'));
});

//index.category用scriptコンパイル
gulp.task('script', function(){
  gulp.src([
      './src/script/jquery.lazyload.min.js',
      './src/script/common.js'
    ])
  .pipe(script('index.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dst/script/'));
});

//記事用scriptのコンパイル
gulp.task('article', function(){
  gulp.src([
      './src/script/jquery.lazyload.min.js',
      './src/script/common.js',
      './src/script/article.js',
      './src/script/article.js'
    ])
  .pipe(script('article.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dst/script/'));
});

gulp.task('img', function(){
  gulp.src(['./src/img/*.jpg', './src/img/*.png', './src/img/*.gif'])
  .pipe(gulp.dest('./dst/img/'));
});

gulp.task('watch', function(){
  gulp.watch(['./src/css/*/*.scss', './src/script/*.js'], ['style', 'script']);
});
