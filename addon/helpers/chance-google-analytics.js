import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceGoogleAnalytics(params/*, hash */ ) {
  const chance = new Chance();
  return chance.google_analytics();
});
