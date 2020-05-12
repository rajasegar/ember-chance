import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceLast(params, { nationality } ) {
  const chance = new Chance();
  return chance.last({nationality});
});
