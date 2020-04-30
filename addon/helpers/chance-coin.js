import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceCoin(params/*, hash */ ) {
  const chance = new Chance();
  return chance.coin();
});
