'use strict';

let gulp = require('gulp');
let $ = require('gulp-load-plugins')();

let src = require('./sources');

gulp.task('html', html);

function html() {
  return gulp.src(src.templates.all)
    .pipe($.minifyHtml())
    .pipe(gulp.dest(src.dist));
}