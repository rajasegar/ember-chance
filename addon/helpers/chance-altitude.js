import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceAltitude(params/*, hash */ ) {
  const chance = new Chance();
  return chance.altitude();
});
