import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceAppleToken(params/*, hash */ ) {
  const chance = new Chance();
  return chance.apple_token();
});
