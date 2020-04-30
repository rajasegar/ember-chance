import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceAndroidId(params/*, hash */ ) {
  const chance = new Chance();
  return chance.android_id();
});
