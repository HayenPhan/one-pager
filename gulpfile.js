const gulp = require('gulp');  // gulp runs on node that's why we use the require function to get access to the modules
const sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});

// Watch task
gulp.task('default', () => {
  gulp.watch('src/sass/**/*.scss', ['styles']);
});

// Find out how to minify files
