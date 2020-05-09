import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceLetter(params,{ casing } ) {
  const chance = new Chance();
  return chance.letter({ casing });
});
