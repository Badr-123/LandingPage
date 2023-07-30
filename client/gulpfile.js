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

function watchTask() {
  gulp.watch('./src/*.css', cssTask);
}

gulp.task('css', cssTask);
gulp.task('watch', watchTask);



// Task to build the project (clean, minify CSS, and any other tasks you need)
gulp.task('build', gulp.series( cssTask));

// Task to watch for changes in CSS files and run the 'css' task
gulp.task('watch', function() {
  gulp.watch('./src/*.css', cssTask);
});

// Default task that runs 'build' and 'watch' tasks in parallel
gulp.task('default', gulp.parallel('build', 'watch'));
