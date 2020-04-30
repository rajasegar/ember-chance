import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceWeekday(params/*, hash */ ) {
  const chance = new Chance();
  return chance.weekday();
});
