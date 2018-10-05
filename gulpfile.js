const gulp = require('gulp');  // gulp runs on node that's why we use the require function to get access to the modules
const sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/server/css'));
});

// Watch task
gulp.task('default', () => {    // It's better to set this on default, because you'll only have to type in "gulp" to make it work.
  gulp.watch('src/sass/**/*.scss', ['styles']);      // This watches your styles task too.
});

// Find out how to minify files
