import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceCharacter(params,{ pool, alpha, numeric, casing, symbols } ) {
  const chance = new Chance();
  return chance.character({pool, alpha, numeric, casing, symbols});
});
