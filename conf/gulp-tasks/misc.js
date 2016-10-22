const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const paths = require('../paths.conf');

gulp.task('clean', clean);
gulp.task('copy-files', copyOtherFiles);

function clean() {
  return del([paths.dist, paths.tmp]);
}

function copyOtherFiles() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(paths.src, '/**/*'),
    path.join(`!${paths.src}`, '/**/*.{less,js,ts,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(paths.dist));
}