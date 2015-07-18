import Ember from 'ember';

export default Ember.Mixin.create({
  initialHistoryLength: null,

  init: function() {
    this._recordInitialHistoryLength();
    this._super.apply(this, arguments);
  },

  actions: {
    smartGoBack: function() {
      if (window.history.length > this.get('initialHistoryLength')) {
        window.history.back();
      } else {
        this.transitionTo('application');
      }
    }
  },

  _recordInitialHistoryLength: function() {
    this.set('initialHistoryLength', window.history.length);
  }
});
