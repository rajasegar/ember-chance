import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceExpMonth(params/*, hash */ ) {
  const chance = new Chance();
  return chance.exp_month();
});
