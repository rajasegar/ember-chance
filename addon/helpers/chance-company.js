import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceCompany(params/*, hash */ ) {
  const chance = new Chance();
  return chance.company();
});
