import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    var _this = this;
    $.getJSON('https://api.github.com/repos/pierrickrouxel/ember-strap/tags', function(json) {
      // Asynchronous breaks tests
      Ember.run(function() {
        var lastVersion = Ember.A(json).get('firstObject');
        if (lastVersion) {
          _this.set('version', lastVersion.name);
        }
      });
    });
  }
});
