var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
    return gulp.src("Content/scss/**/*.scss")
        .pipe(sass())
        .pipe(plumber())
        .pipe(gulp.dest("Content/css"))
});

gulp.task('watch', function () {

    gulp.watch("Content/scss/**/*.scss", gulp.parallel('sass'));

});