'use strict';

const gray_matter = require('gray-matter');
const factory = require('gulp-factory');

module.exports = function (options) {
  options = options || {};

  return factory({
    pluginName: 'gulp-factory-front-matter',
    packageJsonPath: '.',
    pluginFn: function (file, encode) {
      const raw = gray_matter(file.contents.toString(encode), options);
      file.frontMatter = raw.data || {};
      file.contents = new Buffer(raw.content);
    }
  });
};
