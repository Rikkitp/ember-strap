import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hide: function () {
      this.sendAction('hide');
    },
    anAction: function () {
      this.sendAction('anAction');
    }
  }
});
