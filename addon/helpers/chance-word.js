import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceWord(params, { syllables, length } ) {
  const chance = new Chance();
  return chance.word({ syllables, length });
});
