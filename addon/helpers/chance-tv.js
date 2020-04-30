import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceTv(params/*, hash */ ) {
  const chance = new Chance();
  return chance.tv();
});
