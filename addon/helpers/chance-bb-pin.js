import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceBbPin(params/*, hash */ ) {
  const chance = new Chance();
  return chance.bb_pin();
});
