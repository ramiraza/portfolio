// initiating requires
var gulp        = require('gulp');
var shell       = require('gulp-shell');
var browserSync = require('browser-sync').create();

// task for running jekyll shell commands
gulp.task('build', shell.task(['jekyll serve -w']));

// task for auto refresh with browser-sync
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: '_site/'
    },
    reloadDebounce: 500
  })
  gulp.watch('_site/**/*.*')
      .on('change', browserSync.reload)
});

gulp.task('default', ['build', 'serve']);
