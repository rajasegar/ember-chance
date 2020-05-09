import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceFloating(params, { fixed, min, max } ) {
  const chance = new Chance();
  return chance.floating({fixed, min, max });
});
