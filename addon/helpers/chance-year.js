import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceYear(params, { min, max} ) {
  const chance = new Chance();
  return chance.year({min, max});
});
