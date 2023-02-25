'use strict';
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const { less, watch } = require('gulp');
const gulpless = require('gulp-less');
var jsmin = require('gulp-jsmin');


exports.less = function () {

    return gulp.src('./src/*.less')
        .pipe(gulpless())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

exports.js = function () {
    gulp.src('./scripts/main.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}
exports.watch =  function () {
    gulp.watch('./src/*.less', gulp.series('less'));
};