import { CounterMethods, CounterState } from "@src/models/counter"
import { getModelHelpers } from "@src/utils/tredux"

const counterHelper = getModelHelpers<CounterState, CounterMethods>('counter')
export const useModelCounterState = counterHelper.useModelState
export const updateModelCounter = counterHelper.updateModel
export const dispatchModelCounter = counterHelper.dispatchModel
export const getModelCounterState = counterHelper.getModelState