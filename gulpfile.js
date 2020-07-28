var gulp = require('gulp');
var sass = require('gulp-sass');
// var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
    return gulp.src("Content/scss/**/*.scss")
        .pipe(sass())
        .pipe(plumber())
        .pipe(gulp.dest("Content/css"))
    // .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    //browserSync.init({
    //    server: "./"
    //
    //});

    gulp.watch("Content/scss/**/*.scss", gulp.parallel('sass'));
    // gulp.watch("Views/Login/*.cshtml").on('change', browserSync.reload);

});