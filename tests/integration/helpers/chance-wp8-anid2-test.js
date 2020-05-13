import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | chance-wp8-anid2', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', 'string');

    await render(hbs`{{chance-wp8-anid2 inputValue}}`);

    assert.equal(typeof this.element.textContent.trim(), 'string');
  });
});
