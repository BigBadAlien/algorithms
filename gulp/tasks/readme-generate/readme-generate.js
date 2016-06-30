var fs = require('fs');
var gulp = require('gulp');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
var handleErrors = require("../../utils/handleErrors.js");

gulp.task('readme-generate', function () {
  return gulp.src('./src/*.js')
    .pipe(concat('README.md'))
    .pipe(gulpJsdoc2md({template: fs.readFileSync(__dirname + '/README.hbs', 'utf8')}))
    .on('error', handleErrors)
    .pipe(gulp.dest('.'))
});
