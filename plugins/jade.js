'use strict';

const _ = require('lodash');
const fs = require('fs');
const jade = require('jade');
const factory = require('gulp-factory');

module.exports = function (options) {
  options = options || {};

  function exist(filePath) {
    try {
      fs.statSync(filePath);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return false;
      }
    }
    return true;
  }

  return factory({
    pluginName: 'gulp-factory-jade-render',
    pluginFn: function (file) {
      if(file.frontMatter)
        _.assign(options, file.frontMatter);

      if(!options.layout)
        throw new Error('layout not provided');

      if(!exist(options.layout))
        throw new Error('layout file doesn\'t exist');

      options.content = file.contents.toString();

      file.contents = new Buffer(jade.renderFile(options.layout, options));
    }
  });
};
