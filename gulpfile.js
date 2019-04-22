const gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    replace = require('gulp-replace'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del'),
    fs = require('fs')

function clean() {
    return del([ 'dist' ])
}

function styles() {
    return gulp.src('src/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'))
}

function styles2() {
    return del('dist/style.css')
}

function images() {
    return gulp.src('src/images/*').pipe(gulp.dest('dist/images'))
}

function videos() {
    return gulp.src('src/videos/*').pipe(gulp.dest('dist/videos'))
}

function templates() {
    return gulp.src('src/*.html')
        .pipe(replace(/<link href="style.css"[^>]*>/, function(s) {
            var style = fs.readFileSync('dist/style.css', 'utf8');
            return '<style>\n' + style + '\n</style>';
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'))
}

exports.default = gulp.series(clean, styles, gulp.parallel(images, videos, templates), styles2)
