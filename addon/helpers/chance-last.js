import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceLast(params/*, hash */ ) {
  const chance = new Chance();
  return chance.last();
});
