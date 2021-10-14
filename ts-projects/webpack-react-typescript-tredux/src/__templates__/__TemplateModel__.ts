import { getModelHelpers } from "@tredux/tredux"

const M__Templae__ = '__Template__'
const helper = getModelHelpers<__Templae__State, __Templae__Methods>(M__Templae__)
export const { useModelState: ums__Templae__, updateModel: um__Templae__, dispatchModel: dm__Templae__, getModelState: gms__Templae__ } = helper
const { updateModel: update,  dispatchModel: dispatch, getModelState: getState } = helper


class __Templae__State {
}


class __Templae__Methods {
  test = async (_, first: string) => {
    console.log( _, first )
  }
}


export default {
  name: M__Templae__,
  state: new __Templae__State(),
  methods: new __Templae__Methods()
}