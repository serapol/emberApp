import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['tab-button'],
  classNameBindings: ['isActive:active'],

  manager: null,
  index: null,
  isRegistered: false,

  registerInParent() {
    if(this.get('isRegistered')) return;

    const parent = this.get('parent');

    if (parent) {
      parent.registerChild(this);
      this.set('isRegistered', true);
    }
  },

  unregisterFromParent() {
    const parent = this.get('parent');

    if(!this.get('isRegistered') || !parent) return;

    parent.removeChild(this);

    this.set('isRegistered', false);
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.registerInParent();
  },

  willRender() {
    this._super(...arguments);
    this.registerInParent();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.unregisterFromParent();
  },

  isActive: Ember.computed('activeId', 'elementId', function() {
    return this.get('activeId') === this.get('elementId');
  }).readOnly(),

  click() {
    this.get('parent').send('select', this.get('elementId'));
  }
});
