import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceHash(params/*, hash */ ) {
  const chance = new Chance();
  return chance.hash();
});
