import { helper } from "@ember/component/helper";
import Chance from "chance";

export default helper(function chanceAddress(params, { short_suffix }) {
  const chance = new Chance();
  return chance.address({ short_suffix });
});
