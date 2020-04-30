import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceCurrencyPair(params/*, hash */ ) {
  const chance = new Chance();
  return chance.currency_pair();
});
