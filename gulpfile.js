var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src(['./src/sass/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./src/sass/'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch('./src/sass/**/*.scss', ['sass']); // 追記
});