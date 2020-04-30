import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chancePrime(params, { min, max }) {
  const chance = new Chance();
  return min && max ? chance.prime({ min, max }): chance.prime();
});
