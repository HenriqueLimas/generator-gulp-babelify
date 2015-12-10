(function() {

  'use strict';

  var path = require('path');
  var helpers = require('yeoman-generator').test;
  var assert = require('yeoman-generator').assert;

  var appName = 'test-app';

  describe('gulp-babelify', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../../app'))
        .withOptions({
          skipInstall: true,
          skipServe: true
        })
        .withArguments([appName])
        .on('end', done)
    });

    it('generates configuration files.', function() {
      assert.file([
        appName + '/.gitignore',
        appName + '/package.json',
        appName + '/.babelrc',
        appName + '/.eslintrc',
        appName + '/README.md',
        appName + '/gulpfile.js',
        appName + '/karma.conf.js'
      ]);
    });

    it('generates build files.', function() {
      assert.file([
        appName + '/build/gulp-clean.js',
        appName + '/build/gulp-dist.js',
        appName + '/build/gulp-lint.js',
        appName + '/build/gulp-scripts.js',
        appName + '/build/gulp-serve.js',
        appName + '/build/gulp-styles.js',
        appName + '/build/gulp-templates.js',
        appName + '/build/gulp-test.js',
        appName + '/build/gulp-watch.js',
        appName + '/build/sources.js'
      ]);
    });

    describe('public files', function() {
      var basePath;

      before(function() {
        basePath = appName + '/public/';
      });

      it('generates public/src files.', function() {
        assert.file([
          basePath + 'index.html',
          basePath + 'src/index.js',
          basePath + 'src/foo/foo.js',
          basePath + 'src/foo/foo.css',
          basePath + 'src/lib/normalize.css'
        ]);
      });
    });

    describe('test files', function() {
      var basePath;

      before(function() {
        basePath = appName + '/test/';
      });

      it('generates test files.', function() {
        assert.file([
          basePath + 'foo/foo.spec.js'
        ]);
      });
    });
  });
})();