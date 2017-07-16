import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('account');
  },

  init() {
    this._super(...arguments);

    this.get('router').on('didTransition', () => this.controller.clearErrors());
  }
});
