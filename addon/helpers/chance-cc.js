import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceCc(params,{type} ) {
  const chance = new Chance();
  return chance.cc({type});
});
