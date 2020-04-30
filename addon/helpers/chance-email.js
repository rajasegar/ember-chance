import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceEmail(params/*, hash */ ) {
  const chance = new Chance();
  return chance.email();
});
