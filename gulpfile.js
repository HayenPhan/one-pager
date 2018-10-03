const gulp = require('gulp');  // gulp runs on node that's why we use the require function to get access to the modules
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
