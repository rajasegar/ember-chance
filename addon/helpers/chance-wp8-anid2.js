import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceWp8Anid2(params/*, hash */ ) {
  const chance = new Chance();
  return chance.wp8_anid2();
});
