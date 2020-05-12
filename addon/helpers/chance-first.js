import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceFirst(params, {gender,nationality} ) {
  const chance = new Chance();
  return chance.first({gender, nationality});
});
