import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceExpYear(params/*, hash */ ) {
  const chance = new Chance();
  return chance.exp_year();
});
