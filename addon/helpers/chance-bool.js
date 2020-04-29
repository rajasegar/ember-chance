import { helper } from '@ember/component/helper';
// Load Chance
import Chance from 'chance';

export default helper(function chanceBool(params, { likelihood }) {
// Instantiate Chance so it can be used
  const _chance = new Chance();
  return likelihood ? _chance.bool({ likelihood }) : _chance.bool();
});
