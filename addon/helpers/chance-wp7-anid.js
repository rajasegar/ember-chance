import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceWp7Anid(params/*, hash */ ) {
  const chance = new Chance();
  return chance.wp7_anid();
});
