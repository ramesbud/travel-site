// we need to require gulp
var gulp = require('gulp'),
// require various gulp packages
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// create a watch task
gulp.task('watch', function() {

  browserSync.init({
    // notify false is to disable the notifications seen in the browser
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  })

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
