var gulp = require("gulp");
var server = require("gulp-server-livereload");
var sass = require("gulp-sass");
var prefix = require("gulp-autoprefixer");

gulp.task('start', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});


gulp.task('styles', function () {
	gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
            browsers: ['last 30 versions']
        }))
		.pipe(gulp.dest('app/css'));
});
 

gulp.task('default', ['start'], function () {
  gulp.watch('app/sass/**/*.sass', ['styles']);
});



