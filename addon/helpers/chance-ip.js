import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceIp(params/*, hash */ ) {
  const chance = new Chance();
  return chance.ip();
});
