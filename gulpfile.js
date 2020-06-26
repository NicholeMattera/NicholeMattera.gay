const gulp = require('gulp'),
    cleanCSS = require('clean-css'),
    replace = require('gulp-replace'),
    htmlmin = require('gulp-htmlmin'),
    del = require('del'),
    fs = require('fs'),
    browserSync = require('browser-sync').create()

function clean() {
    return del([ 'dist' ])
}

function favicon() {
    return gulp.src('src/favicon.ico').pipe(gulp.dest('dist'))
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

function browsersync() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch("src/videos/*", videos).on('change', browserSync.reload);
    gulp.watch("src/images/*", images).on('change', browserSync.reload);
    gulp.watch("src/*.(css|html)", templates).on('change', browserSync.reload);
}

const build = gulp.series(clean, gulp.parallel(favicon, images, videos, templates))
const serve = gulp.series(build, browsersync)

exports.serve = serve

exports.default = build
