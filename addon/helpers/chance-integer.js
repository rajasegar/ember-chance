import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceInteger(params,{ min, max } ) {
  const chance = new Chance();
  return chance.integer({min, max});
});
