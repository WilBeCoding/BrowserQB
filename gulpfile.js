var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
    


    gulp.task('sass', function() {
      return sass('./sass/stylesheets/style.scss')
        .on('error', sass.logError)
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('./public/stylesheets/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./public/stylesheets/'))
    });

    gulp.task('watch', function() {
      gulp.watch('./sass/stylesheets/*.scss', ['sass'])
    });
    
    gulp.task('default', function() {
      console.log("I have configured a gulpfile");
    });
    