import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceSyllable(params/*, hash */ ) {
  const chance = new Chance();
  return chance.syllable();
});
