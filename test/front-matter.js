'use strict';

const test = require('tape');
const fm = require('../plugins/front-matter');
const fixture = require('./fixtures/file-gen');

test('plugin should have frontMatter & contents properties', assert => {
  const plugin = fm();

  plugin.once('data', file => {
    assert.deepEqual(file.frontMatter, {
      title: 'awesome'
    });
    assert.equal(file.contents.toString(), '# heading');
    assert.end();
  });

  plugin.write(fixture(
    '---\ntitle: awesome\n---\n# heading', 'test.md')
  );

  plugin.end();
});
