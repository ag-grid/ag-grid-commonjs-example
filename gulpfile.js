var gulp = require('gulp');
var browserify = require('browserify');
var browersifyCss = require('browserify-css');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
    return browserify({ entries: ['src/main.js'] })
        .transform(browersifyCss, {global: true})
        .bundle()
        .pipe(source('main.bundled.js'))
        .pipe(gulp.dest('dist'));

});
