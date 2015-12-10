var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);

    this.projectOptions = {};

    this.option('skip-install');
    this.option('skip-serve', {
      desc: 'Do not automatically run server',
      defaults: false
    });

    this.argument('appname', {
      type: String,
      required: false
    });

    this.projectOptions.name = this.appname;

  },
  prompting: function() {

    if (!this.projectOptions.name) {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }, function(anwsers) {
        this.projectOptions.name = anwsers.name;

        done();
      }.bind(this));
    }
  },
  configuring: function() {
    this._createFiles('__gitignore');
    this._createFiles('package.json');
    this._createFiles('.babelrc');
    this._createFiles('.eslintrc');
    this._createFiles('README.md');
    this._createFiles('gulpfile.js');
    this._createFiles('karma.conf.js');

    this._createFiles('build/gulp-clean.js');
    this._createFiles('build/gulp-dist.js');
    this._createFiles('build/gulp-lint.js');
    this._createFiles('build/gulp-scripts.js');
    this._createFiles('build/gulp-serve.js');
    this._createFiles('build/gulp-styles.js');
    this._createFiles('build/gulp-templates.js');
    this._createFiles('build/gulp-test.js');
    this._createFiles('build/gulp-watch.js');
    this._createFiles('build/sources.js');
  },
  writing: {
    public: function() {
      var basePath = 'public/';

      this._createFiles(basePath + 'index.html');
      this._createFiles(basePath + 'src/index.js');

      this._createFiles(basePath + 'src/foo/foo.js');
      this._createFiles(basePath + 'src/foo/foo.css');

      this._createFiles(basePath + 'src/lib/normalize.css');
    },
    test: function() {
      var basePath = 'test/';

      this._createFiles(basePath + 'foo/foo.spec.js');
    }
  },
  install: function() {
    if (this.options.skipInstall) return;

    this.npmInstall([], {
      cwd: this._getCwd()
    });
  },
  end: function() {
    if (this.options.skipServe) return;

    this.spawnCommand('gulp', ['serve'], {
      cwd: this._getCwd()
    });
  },
  _createFiles: function (path) {
    this.fs.copyTpl(
      this.templatePath(path),
      this.destinationPath(this.projectOptions.name + '/' + path.replace('__', '.')),
      this.projectOptions
    );
  },
  _getCwd: function () {
    return this.destinationPath(this.projectOptions.name);
  }
});
