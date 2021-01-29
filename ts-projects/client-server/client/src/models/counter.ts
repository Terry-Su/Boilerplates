import { MethodFirstParamFactory } from "@src/utils/tredux"

export class CounterState {
  count: number =  0
  name: string = 'Counter'
}

type MethodFirstParam = MethodFirstParamFactory<CounterState, CounterMethods>

export class CounterMethods {
  add = ({update, state, dispatch, getState}: MethodFirstParam, num: number) => {
    update({count: state.count + num })
  }
  subtract = ({update, state}: MethodFirstParam, num: number) => update({count: state.count - num })
}

export default {
  name: 'counter',
  state: new CounterState(),
  methods: new CounterMethods()
}
