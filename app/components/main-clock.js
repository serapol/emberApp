import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  className: 'clock',
  intervalId: null,

  time: Date.now(),

  init() {
    this._super(...arguments);

    this.set('intervalId', setInterval(() => this.set('time', Date.now()), 500));
  },

  willDestroyElement() {
    this._super(...arguments);

    clearInterval(this.get('intervalId'));
  }
});
