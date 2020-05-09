import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceNatural(params,{ min, max, exclude } ) {
  const chance = new Chance();
  return chance.natural( { min, max, exclude });
});
