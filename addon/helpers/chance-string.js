import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceString(params, { length, pool, alpha, casing, symbols } ) {
  const chance = new Chance();
  return chance.string({ length, pool, alpha, casing, symbols});
});
