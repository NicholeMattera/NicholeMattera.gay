const gulp = require('gulp'),
    cleanCSS = require('clean-css'),
    replace = require('gulp-replace'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del'),
    fs = require('fs')

function clean() {
    return del([ 'dist' ])
}

function images() {
    return gulp.src('src/images/*').pipe(gulp.dest('dist/images'))
}

function videos() {
    return gulp.src('src/videos/*').pipe(gulp.dest('dist/videos'))
}

function templates() {
    var css = new cleanCSS({}).minify(fs.readFileSync('src/style.css', 'utf8'))

    return gulp.src('src/*.html')
        .pipe(replace(/<link href="style.css"[^>]*>/, () => `<style>${css.styles}</style>`))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'))
}

exports.default = gulp.series(clean, gulp.parallel(images, videos, templates))
