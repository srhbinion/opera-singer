var gulp=require("gulp"),sass=require("gulp-sass"),browserSync=require("browser-sync").create(),ghPages=require("gulp-gh-pages");gulp.task("hello",function(){console.log("Hello Sarah!")}),gulp.task("watch",["browserSync","sass"],function(){gulp.watch("app/scss/**/*.scss",["sass"])}),gulp.task("sass",function(){return gulp.src("app/scss/**/*.scss").pipe(sass()).pipe(gulp.dest("app/css")).pipe(browserSync.reload({stream:!0}))}),gulp.task("browserSync",function(){browserSync.init({server:{baseDir:"app"}})}),gulp.task("deploy",function(){return gulp.src("./dist/**/*").pipe(ghPages())});