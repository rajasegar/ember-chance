import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceFalsy(params, { pool } ) {
  const chance = new Chance();
  return pool ? chance.falsy({pool}) : chance.falsy();
});
