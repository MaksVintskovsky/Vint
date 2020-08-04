const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
// const less = require('gulp-less');
const sass = require('gulp-sass');
const fileInclude = require('gulp-file-include');

const cssFiles = [
	'./sass/main.sass'
	
];
const jsFiles = [
	'./js/main.js'
];
function styles(){
	return gulp.src(cssFiles)
				.pipe(sourcemaps.init())
				.pipe(sass())
				.pipe(concat('main.css'))			
				.pipe(autoprefixer({
					// overrideBrowserslist: ['> 0.1%'],
		            cascade: false
		        }))
		        // .pipe(cleanCSS({level: 2}))
				.pipe(sourcemaps.write('.'))
				.pipe(gulp.dest('./build/css'))
				.pipe(browserSync.stream());
}
function html(){
	return gulp.src('./app/*.html')
				.pipe(fileInclude({
					prefix: '@@'
				}))
				.pipe(gulp.dest('./'))
}
function scripts(){
	return gulp.src(jsFiles)
				.pipe(concat('main.js'))
				// .pipe(uglify({toplevel: true}))
				.pipe(gulp.dest('./build/js'))
				.pipe(browserSync.stream());
}
function watch(){
	 browserSync.init({
        server: {
            baseDir: "./"
        },
        //tunnel: true
    });
	gulp.watch('./sass/**/*.sass', styles)
	gulp.watch('./js/**/*.js', scripts)
	gulp.watch('./*.html').on('change', browserSync.reload)
	gulp.watch('./app/**/*.html', html).on('change', browserSync.reload)
}
function clean(){
	return del(['build/*']);
}
// gulp.task('styles', styles);
// gulp.task('scripts', scripts);

gulp.task('watch', watch);
gulp.task('html', html);
gulp.task('build', gulp.series(clean,
						gulp.parallel(styles, scripts, html)
					));
gulp.task('dev',  gulp.series('build', 'watch', 'html'));