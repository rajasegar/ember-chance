import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceName(params, { middle, middle_initial, nationality, prefix, suffix, gender } ) {
  const chance = new Chance();
  return chance.name({ middle, middle_initial, nationality, prefix, suffix, gender });
});
