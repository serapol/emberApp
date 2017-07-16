import Ember from 'ember';
import TabPanel from './tabs-container/tab-panel';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['tabs-container'],
  children: Ember.A(),

  panels: Ember.computed.filter('children', function(tabPanel) {
    return tabPanel instanceof TabPanel;
  }),

  activeId: Ember.computed.oneWay('panels.firstObject.elementId'),

  buttons: Ember.computed('panels.@each.{elementId,title}', function() {
    return this.get('panels').map((pane) => pane.getProperties('elementId', 'title'));
  }),

  registerChild(child) {
    Ember.run.schedule('sync', () => {
      this.get('children').addObject(child);
    });
  },

  removeChild(child) {
    this.get('children').removeObject(child);
  },

  actions: {
    select(elementId) {
      this.set('activeId', elementId);
    }
  }
});
