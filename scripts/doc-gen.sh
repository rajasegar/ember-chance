#!/bin/sh

echo 'Creating helpers examples'
echo '----------------'

create_docs() {
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
  " >> $2
}

while read -r helper; do
  echo $helper
  echo "=================="
  create_docs $helper $2
done < $1

