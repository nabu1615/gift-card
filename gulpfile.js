var gulp = require('gulp'),
	jade = require('jade'),
	watch = require('gulp-watch'),
	gulpJade = require ('gulp-jade'),
	gulpSass= require ('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	postcss = require('gulp-postcss'),
	gulpConnect = require('gulp-connect'),

	// Image
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	imageminGifsicle = require('imagemin-gifsicle'),
	imageminJpegtran = require('imagemin-jpegtran'),
	imageminOptipng = require('imagemin-optipng'),
	imageminSvgo = require('imagemin-svgo'),

	//Live Reload

	liveReload = require('gulp-livereload'),
	
	dest = require('gulp-dest'),
    notify = require("gulp-notify") 
    bower = require('gulp-bower');
	uglify = require ('gulp-uglify'),
	browserify = require('gulp-browserify'),
	streamify = require('gulp-streamify');
	source =require('vinyl-source-stream');

var config = {
     bowerDir: './bower_components' ,
	outputDir:'builds/output/'
}

// Jade

gulp.task('jade', function () {
	return gulp.src('src/templates/layouts/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
	.pipe(gulp.dest('builds/output/'))
	.pipe(gulpConnect.reload());
})

// Js

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
	.pipe(gulp.dest('builds/output/js/'))
	.pipe(gulpConnect.reload());
	})


// Vendor

gulp.task('vendor', function(){
	gulp.src('src/js/vendor/*.js')
	.pipe(gulp.dest('builds/output/js/vendor/'))
})


// Move Fonts

gulp.task('fonts', function(){
	gulp.src('src/fonts/**/*.{ttf,otf,woff,woff2,eot,svg}')
		.pipe(gulp.dest('builds/output/fonts/'))
	})

//Server 

gulp.task('connect', function(){
	gulpConnect.server({
		root:'builds/output',
		open:{broser: 'Google Chrome'},
		livereload:true
		});
	});


// Move Image

gulp.task('images', function(){
	gulp.src('src/images/*/*')
		.pipe(imagemin({
			progressive:true,
			svgoPlugins:[{removeViewBox: false}],
			use:[pngquant()],
			use:[imageminGifsicle({interlaced: true})],
			use:[imageminJpegtran({progressive: true})],
			use:[imageminOptipng({optimizationLevel: 3})],
			use:[imageminSvgo()]
			}))
		.pipe(gulp.dest('builds/output/images/'))
		.pipe(gulpConnect.reload());
	})



gulp.task('sass', function(){
	gulp.src('src/sass/**/*.scss')
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe(gulp.dest('./builds/output/css/'))
		.pipe(gulpConnect.reload());
	})


gulp.task('watch', function(){
	gulp.watch('src/templates/**/*.jade', ['jade']);
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/images/*/*', ['images']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/js/vendor/*.js', ['vendor']);

})

// Default Task
gulp.task('default', ['jade', 'js', 'vendor', 'connect', 'images', 'fonts', 'watch', 'sass']);


