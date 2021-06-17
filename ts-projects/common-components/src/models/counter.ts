import { MethodFirstParamFactory, getModelHelpers } from "@tredux/tredux"

export class CounterState {
  count: number =  0
}

type MethodFirstParam = MethodFirstParamFactory<CounterState, CounterMethods>

export class CounterMethods {
  add = ({update, state, dispatch, getState}: MethodFirstParam, num: number) => {
    update({ count: state.count + 1 })
  }
  delayAdd = async ({update, state, dispatch, getState}: MethodFirstParam, duration: number, num: number) => {
    await new Promise(resolve => setTimeout(resolve, duration))
    dispatch('add', num)
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

