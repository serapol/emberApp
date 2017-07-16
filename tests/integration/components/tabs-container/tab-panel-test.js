import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tabs-container/tab-panel', 'Integration | Component | tabs container/tab-panel', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{tabs-container/tab-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tabs-container/tab-panel}}
      template block text
    {{/tabs-container/tab-panel}}
  `);

  assert.equal(this.$().text().trim(), '');
});
