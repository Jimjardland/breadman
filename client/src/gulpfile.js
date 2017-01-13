var handlebars = require('gulp-handlebars'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    path = require('path'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    sprite = require('gulp-sprite-generator');



gulp.task('default', function() {
    gulp.start('templates');
    gulp.start('scripts');
    gulp.start('partials');
    gulp.start('sass');
});
 
gulp.task('templates', function(){
  gulp.src('./templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'nhl.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('nhl.templates.js'))
    .pipe(gulp.dest('./_dist/build/js/'))
    .pipe(livereload());
});


gulp.task('sass', function () {
  return gulp.src('./gui/**/*.scss') //'./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./_dist/build/'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./_dist/build/'))
    .pipe(livereload());
});

gulp.task('scripts', function() {
  return gulp.src('./scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./_dist/build/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./_dist/build/js/'))
    .pipe(livereload());
});

gulp.task('sprites', function() {
    var spriteOutput;

    spriteOutput = gulp.src("./_dist/build/scss/*.css")
        .pipe(sprite({
            baseUrl:         "./img",
            spriteSheetName: "sprite.png",
            spriteSheetPath: "../../../_dist/build/image"
        }));

    spriteOutput.css.pipe(gulp.dest("./_dist/build/scss"));
    spriteOutput.img.pipe(gulp.dest("./_dist/build/image"));
});


gulp.task('partials', function() {
  // Assume all partials start with an underscore 
  // You could also put them in a folder such as source/templates/partials/*.hbs 
  gulp.src(['./templates/**/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          // Strip the extension and the underscore 
          // Escape the output with JSON.stringify 
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }))
    .pipe(concat('nhl.partials.js'))
    .pipe(gulp.dest('./_dist/build/js/'));
});

gulp.task('watch', function() {
  
  // Watch .scss files
  gulp.watch('./gui/**/*.scss', ['sass']);

  // Watch .js files
  gulp.watch('./scripts/**/*.js', ['scripts']);

  // Watch .hbs files
  gulp.watch('./templates/**/*.hbs', ['partials', 'templates']);

  livereload.listen()

});