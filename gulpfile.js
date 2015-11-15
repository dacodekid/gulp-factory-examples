const gulp = require('gulp');
const front_matter = require('./plugins/front-matter');
const markup = require('./plugins/markup');
const render = require('./plugins/jade');

gulp.task('default', function() {
  return gulp.src('./fixtures/*.md')
    .pipe(front_matter())
    .pipe(markup())
    .pipe(render({
      layout: './fixtures/layout.jade',
      pretty: true
    }))
    .pipe(gulp.dest('dist'));
});
