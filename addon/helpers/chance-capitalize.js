import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceCapitalize(params/*, hash */ ) {
  const chance = new Chance();
  return chance.capitalize(params[0]);
});
