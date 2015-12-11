var generators = require('yeoman-generator');
var classify = require("underscore.string/classify");

module.exports = generators.NamedBase.extend({
  writing: function() {
    this._createSourceFile();
    this._createTestFile();
  },

  _createSourceFile: function() {
    this._createFile('module.js', 'public/src/' + this.name + '/' + this.name + '.js');
  },

  _createTestFile: function() {
    this._createFile('module.spec.js', 'test/' + this.name + '/' + this.name + '.spec.js');
  },

  _createFile: function(templatePath, destinationPath) {
    this.fs.copyTpl(
      this.templatePath(templatePath),
      this.destinationPath('./' + destinationPath),
      {
        className: classify(this.name),
        moduleName: this.name
      }
    );
  }
});