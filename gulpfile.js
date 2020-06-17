var gulp = require("gulp"),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    tsify = require('tsify'),
    fancy_log = require('fancy-log'),
    browserSync = require('browser-sync').create();
   

var watchedBrowserify = watchify (browserify({
    basedir: ".",
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {},
}).plugin(tsify));

/*alterntive of "tsify"
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function(){
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'));
});
*/


gulp.task('sync', function(){
    var files = [
        'dist/*.html',
        'dist/css/*.css',
        'dist/*.{png,jpg,gif}',
        'dist/*.js'
     ];

    browserSync.init(files, {
        server: {
            baseDir: "./dist"
        }
    })
})


/*
gulp.task('default', gulp.series(gulp.parallel('copy-html'), function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
}));
*/
function bundle() {
    return watchedBrowserify
    .bundle()
    .on('error', fancy_log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));    
}

gulp.task('default', bundle);
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', fancy_log);