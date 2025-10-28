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
  add = (_, num: number) => {
    update(prevState => ({count: prevState.count + 1}))
  }
  subtract = (_, num: number) => update({count: getState().count - num })
}


export default {
  name: MCounter,
  state: new CounterState(),
  methods: new CounterMethods()
}