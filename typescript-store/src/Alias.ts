import AliasStore from "./store/alias/AliasStore"
import Getters from "./store/alias/Getters"
import Actions from "./store/alias/Actions"

export default class Alias {
  aliasStore: AliasStore
  getters: Getters
  actions: Actions

  constructor( canvas: CanvasRenderingContext2D ) {
    const aliasStore: AliasStore = new AliasStore()
    this.aliasStore = aliasStore

    const getters = new Getters( aliasStore )
    this.getters = getters

    const actions = new Actions( aliasStore, getters )
    this.actions = actions
  }

}
