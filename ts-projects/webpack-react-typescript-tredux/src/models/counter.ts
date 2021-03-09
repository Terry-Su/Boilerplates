import { MethodFirstParamFactory } from "@src/utils/tredux"
import { getModelHelpers } from "@src/utils/tredux"

export class CounterState {
  count: number =  0
  name: string = 'Counter'
}

type MethodFirstParam = MethodFirstParamFactory<CounterState, CounterMethods>

export class CounterMethods {
  add = ({update, state, dispatch, getState}: MethodFirstParam, num: number) => {
    update(prevState => ({count: prevState.count + 1}))
  }
  subtract = ({update, state}: MethodFirstParam, num: number) => update({count: state.count - num })
}


export const ModelCounter = 'counter'
const helper = getModelHelpers<CounterState, CounterMethods>(ModelCounter)
export const useModelCounterState = helper.useModelState
export const updateModelCounter = helper.updateModel
export const dispatchModelCounter = helper.dispatchModel
export const getModelCounterState = helper.getModelState

export default {
  name: ModelCounter,
  state: new CounterState(),
  methods: new CounterMethods()
}

