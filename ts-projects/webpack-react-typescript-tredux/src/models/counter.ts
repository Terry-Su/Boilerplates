export class CounterState {
  count =  0
}

export class CounterMethods {
  add = ({update, state}) => update({count: state.count + 1 })
  subtract = ({update, state}) => update({count: state.count - 1 })
}

export default {
  name: 'counter',
  state: new CounterState(),
  methods: new CounterMethods()
}