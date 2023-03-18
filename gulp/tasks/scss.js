import gulp from 'gulp';
import browserSync from 'browser-sync';

// Config
import { path } from '../config/path.js';

// Plagins
import dartSass from 'sass';
import gulpSsas from 'gulp-sass'
import autorpefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import groupMediaQueries from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webp-css';

const sass = gulpSsas(dartSass)

function scss () {
    return gulp.src(path.scss.src)
        .pipe(sass())
        // .pipe(webpCss())
        .pipe(concat('main.css'))
        .pipe(autorpefixer())
        .pipe(groupMediaQueries())
        .pipe(gulp.dest(path.scss.dest))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.scss.dest))
        .pipe(browserSync.stream());
};
export default scss;