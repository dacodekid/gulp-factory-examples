'use strict';

const mark_down = require('markdown-it');
const factory = require('gulp-factory');
const util = factory.gulpUtil;

module.exports = function (options) {
  options = options || {};

  return factory({
    pluginName: 'gulp-factory-markUp',
    warnings: false,
    pluginFn: function (file) {
      const data = mark_down(options)
                    .render(file.contents.toString());
      file.contents = new Buffer(data);
      file.path = util.replaceExtension(file.path, '.html');
    }
  });
};
