import gulp from 'gulp';

// Config
import { path } from '../config/path.js';

// Plagins

import ghPages from 'gulp-gh-pages';

function deploy () {
    return gulp.src('./dist/**/*')
        .pipe(ghPages())
}

export default deploy;

