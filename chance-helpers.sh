#!/bin/sh

echo 'Creating helpers'
echo '----------------'

addon_folder="addon/helpers"
test_folder="tests/integration/helpers"
app_folder="app/helpers"

function create_helper() {
  helper=$1
  helper_name="chance-$1"
  caps=$(echo $helper_name | awk -F - '{printf "%s", $1; for(i=2; i<=NF; i++) printf "%s", toupper(substr($i,1,1)) substr($i,2); print"";}')
  echo 'installing helper'

  # Creating addon
  helper_addon="$addon_folder/$helper_name.js"
  touch $helper_addon
  echo "\033[32mcreate\033[0m $helper_addon"

  # Writing addon content
  echo "import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function $caps(params/*, hash */ ) {
  const chance = new Chance();
  return chance.$helper();
});" > $helper_addon

  # Creating addon test
  echo 'installing helper-test'
  helper_test="$test_folder/$helper_name-test.js"
  touch $helper_test
  echo "\033[32mcreate\033[0m $helper_test"

  # Writing addon test content
  echo "import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | $helper_name', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '1234');

    await render(hbs\`{{$helper_name inputValue}}\`);

    assert.equal(this.element.textContent.trim(), '1234');
  });
});" > $helper_test

  # Creating app helper
  echo 'installing helper-addon'
  app_helper="$app_folder/$helper_name.js"
  touch $app_helper
  echo "\033[32mcreate\033[0m $app_helper"


  # Writing app helper content
  echo "export { default, $caps } from 'ember-chance/helpers/$helper_name';" > $app_helper

  # Write examples to application.hbs
  echo "
  <h3>$helper_name:</h3>
  <p>Description for $helper_name goes here.</p>
  <p>
  <code>
  \{{ $helper_name }}
  </code>
  </p>
  <p>With named arguments (options) :</p>
  <p>
  <code>
  \{{ $helper_name }}
  </code>
  </p>
  " >> tests/dummy/app/templates/application.hbs
}

function create_docs() {
  helper_name="chance-$1"
  # Write examples to application.hbs
  echo  "
  <h3>$helper_name:</h3>
  <p>Description for $helper_name goes here.</p>
  <p>
  <code>
  \{{ $helper_name }}
  </code>
  </p>
  <p>
  <code>
  => {{ $helper_name }}
  </code>
  </p>
  <p>With named arguments (options) :</p>
  <p>
  <code>
  \{{ $helper_name }}
  </code>
  </p>
  " >> tests/dummy/app/templates/application.hbs
}

while read -r helper; do
  echo $helper
  echo "=================="
  #create_helper $helper
  create_docs $helper
done < $1


#temp="chance-bool-falsy"
#cap=$(echo $temp | awk -F - '{printf "%s", $1; for(i=2; i<=NF; i++) printf "%s", toupper(substr($i,1,1)) substr($i,2); print"";}')
#echo $cap
