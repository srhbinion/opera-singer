var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//greeting
gulp.task('hello', function() {
  console.log('Hello Sarah!');
});

//build scss
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
});

//compile scss and refresh browser
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//serves the site
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})