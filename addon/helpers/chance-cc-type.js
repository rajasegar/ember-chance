import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceCcType(params, {raw} ) {
  const chance = new Chance();
  return chance.cc_type({raw});
});
