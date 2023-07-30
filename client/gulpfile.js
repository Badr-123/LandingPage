const gulp = require('gulp');
const uglifycss = require('gulp-uglifycss');

function cssTask() {
  return gulp.src('./src/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglifyComments": true
    }))
    .pipe(gulp.dest('dist'));
}

gulp.task('css', cssTask);

gulp.task('build', gulp.series(cssTask));

gulp.task('watch', function() {
  gulp.watch('./src/*.css', cssTask);
});
