
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('format-time', 'helper:format-time', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 1500217896930);

  this.render(hbs`{{format-time inputValue}}`);

  assert.equal(this.$().text().trim(), '16/07/2017 15:11:36');
});

