var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');

//greeting
gulp.task('hello', function() {
  console.log('Hello Sarah!');
});

//build scss
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
});

//compile scss and refresh browser
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//serves the site
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
  })
})

//gh-pages
gulp.task('deploy', ['watch'], function() {
  return gulp.src('./dist/**/*')
    .pipe(deploy())
});