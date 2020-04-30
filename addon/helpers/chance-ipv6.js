import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceIpv6(params/*, hash */ ) {
  const chance = new Chance();
  return chance.ipv6();
});
