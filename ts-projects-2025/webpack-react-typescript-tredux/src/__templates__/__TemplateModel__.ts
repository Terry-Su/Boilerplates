import { getModelHelpers } from "@tredux/tredux"

const M__Template__ = '__Template__'
const helper = getModelHelpers<__Template__State, __Template__Methods>(M__Template__)
export const { useModelState: ums__Template__, updateModel: um__Template__, dispatchModel: dm__Template__, getModelState: gms__Template__ } = helper
const { updateModel: update,  dispatchModel: dispatch, getModelState: getState } = helper


class __Template__State {
}


class __Template__Methods {
  test = async (_, first: string) => {
    console.log( _, first )
  }
}


export default {
  name: M__Template__,
  state: new __Template__State(),
  methods: new __Template__Methods()
}