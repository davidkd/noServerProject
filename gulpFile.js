

var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate')
var watch = require('gulp-watch')


var paths = {
  jsSource: ['./js/**/*.js']
}

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  .pipe(gulp.dest('./public'))
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
});

gulp.task('default', ['watch', 'js']);
