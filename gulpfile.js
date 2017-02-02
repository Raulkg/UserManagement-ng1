var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var del = require('del');
var stripDebug = require('gulp-strip-debug');
var vinylPaths = require('vinyl-paths');
var browserSync = require('browser-sync');
var prettify = require('gulp-jsbeautifier');

gulp.task('prettify', function() {
  gulp.src(['./*.css', './*.html', './*.js','./app/**/*.js'])
    .pipe(prettify())
    .pipe(gulp.dest('./dist'));
});


gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
   });



gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['docs'], cb);
});


gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./docs/'))
});
gulp.task('minify-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./docs/'))
});
gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('docs/bower_components'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('docs/'));
});



gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});




gulp.task('build', function() {
  runSequence(
  	
    ['lint', 'minify-css', 'prettify','minify-js', 'copy-html-files', 'copy-bower-components', 'connect']
  );
});


gulp.task('default', ['build'], function() {  
  gulp.watch('app/*.css', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/*.js', browserSync.reload);
    gulp.watch('app/**/*.css', browserSync.reload);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/**/*.js', browserSync.reload);
});




