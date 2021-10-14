import { getModelHelpers } from "@tredux/tredux"

const MCounter = 'counter'
const helper = getModelHelpers<CounterState, CounterMethods>(MCounter)
export const { useModelState: umsCounter, updateModel: umCounter, dispatchModel: dmCounter, getModelState: gmsCounter } = helper
const { updateModel: update,  dispatchModel: dispatch, getModelState: getState } = helper


class CounterState {
  count: number =  0
  name: string = 'Counter'
}


class CounterMethods {
  run = async () => {
    update({count: getState().count + 1})
    dmCounter('add', 1)
    await dispatch('delayAdd', 1000, 1)
    const currentCount = getState().count
  }
  add = (_, num: number = 1) => {
    update({ count: getState().count + num })
  }
  delayAdd = async (_, duration: number, num: number) => {
    await new Promise(resolve => setTimeout(resolve, duration))
    dispatch('add', num)
  }
}


export default {
  name: MCounter,
  state: new CounterState(),
  methods: new CounterMethods()
}