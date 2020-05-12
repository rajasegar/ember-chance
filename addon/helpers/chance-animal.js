import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceAnimal(params, { type} ) {
  const chance = new Chance();
  return chance.animal({type});
});
