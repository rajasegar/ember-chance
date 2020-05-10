import { helper } from '@ember/component/helper';
import Chance from 'chance';

export default helper(function chanceParagraph(params, { sentences } ) {
  const chance = new Chance();
  return chance.paragraph({sentences});
});
