var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var cp = require('child_process');
var browserSync = require('browser-sync');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

// Build the Jekyll Site dev version
gulp.task('jekyll-build-dev', function (done) {
    return cp.spawn( 'bundle' , ['exec', 'jekyll', 'build', '--config', '_config_dev.yml'], {stdio: 'inherit'})
        .on('close', done);
});

// Build the Jekyll Site prod version
gulp.task('jekyll-build', function (done) {
    return cp.spawn( 'bundle' , ['exec', 'jekyll', 'build', '--config', '_config.yml'], {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll and page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass', 'img', 'jekyll-build-dev'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});

// Compile files
gulp.task('sass', function () {
    return gulp.src('_sass/main.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

// Compression images
gulp.task('img', function() {
	return gulp.src('assets/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
    .pipe(gulp.dest('_site/assets/img'))
    .pipe(browserSync.reload({stream:true}));
});

// Watch scss, html, img files
gulp.task('watch', function () {
    gulp.watch('_sass/**/*.scss', ['sass']);
    gulp.watch('assets/js/**/*.js', ['jekyll-rebuild']);
    gulp.watch('assets/img/**/*', ['img']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_pages/*.html', '_posts/*'], ['jekyll-rebuild']);
});

//  Default task
gulp.task('default', ['browser-sync', 'watch']);

//  Build task
gulp.task('build', ['sass', 'img', 'jekyll-build']);

//  Build task
gulp.task('build-dev', ['sass', 'img', 'jekyll-build-dev']);
