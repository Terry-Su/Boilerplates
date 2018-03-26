import AliasStore from "./AliasStore"
import Getters from "./Getters"
import isNotNil from "../../util/isNotNil"

export default class Actions {
  aliasStore: AliasStore

  getters: Getters

  constructor( aliasStore: AliasStore, getters: Getters ) {
    this.aliasStore = aliasStore
    this.getters = getters
  }

}
