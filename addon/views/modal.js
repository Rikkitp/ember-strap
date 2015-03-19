import Ember from 'ember';

export default Ember.View.extend(Ember.ViewTargetActionSupport, {
  layoutName: 'es-modal',

  classNames: ['modal'],
  classNameBindings: ['animation:fade'],
  attributeBindings: ['backdrop:data-backdrop'],

  animation: true,

  // Action called when modal is hidden
  didHideAction: null,

  actions: {
    hideModal: function() {
      this.$().modal('hide');
    }
  },

  sizeClass: function() {
    if (this.get('size') === 'small') {
      return 'modal-sm';
    } else if (this.get('size') === 'large') {
      return 'modal-lg';
    }
  }.property('size'),

  _registerEvents: function() {
    var _this = this;
    if (this.get('didHideAction')) {
      this.$().on('hidden.bs.modal', function() {
        _this.triggerAction({ action: _this.get('didHideAction') });
      });
    }
  }.on('didInsertElement')
});
