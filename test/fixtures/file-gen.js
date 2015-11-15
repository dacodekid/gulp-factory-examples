const File = require('gulp-factory').gulpUtil.File;

module.exports = function(content, path) {
  content = content || '';
  path = path || '';
  return new File({
    path: path,
    contents: new Buffer(content)
  });
};
