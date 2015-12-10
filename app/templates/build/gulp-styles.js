'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();
let reload = require('browser-sync').reload;

let src = require('./sources');

gulp.task('styles', styles);

function styles() {
  return gulp.src(src.styles.all)
    .pipe($.sourcemaps.init())
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(src.dist_src))
    .pipe(reload({stream: true}));
}