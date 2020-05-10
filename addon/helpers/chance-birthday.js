import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceBirthday(params, {string, type, year, american, min, max } ) {
  const chance = new Chance();
  return chance.birthday({ string, type, year, american, min, max });
});
