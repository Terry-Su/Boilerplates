import AliasStore from "./AliasStore";
import { isNil } from "lodash";
import isNotNil from "../../util/isNotNil";

export default class Getters {
  aliasStore: AliasStore;

  constructor(aliasStore: AliasStore) {
    this.aliasStore = aliasStore;
  }
}
