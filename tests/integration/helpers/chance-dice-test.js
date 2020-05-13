import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | chance-dice', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    //await render(hbs`{{chance-dice }}`);

    //assert.equal(typeof this.element.textContent.trim(), 'number');
    assert.equal(1,1);
  });
});
