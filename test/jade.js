'use strict';

const test = require('tape');
const jade = require('../plugins/jade');
const fixture = require('./fixtures/file-gen');

test('jade render should output', assert => {
  const plugin = jade({
    layout: process.cwd() + '/test/fixtures/layout.jade',
    title: 'test title'
  });

  plugin.once('data', file => {
    assert.equal(file.contents.toString(),
    '<html>' +
    '<head><title>test title</title>' +
    '</head><body><h1>test title</h1>' +
    '<div>awesome</div></body>' +
    '</html>');
  });
  plugin.write(fixture('awesome', 'test.md'));

  plugin.end();
  assert.end();
});
