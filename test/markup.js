'use strict';

const test = require('tape');
const markup = require('../plugins/markup');
const fixture = require('./fixtures/file-gen');
const path = require('path');

test('File should return html string and html file extension', assert => {
  const plugin = markup();

  plugin.once('data', file => {
    assert.equal(file.contents.toString(), '<h1>heading</h1>\n');
    assert.equal(path.extname(file.path), '.html');
  });

  plugin.write(fixture('# heading', 'test.md'));

  plugin.end();
  assert.end();
});
