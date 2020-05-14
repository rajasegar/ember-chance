import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceColor(params, { format, grayscale, casing } ) {
  const chance = new Chance();
  return chance.color({format, grayscale, casing});
});
