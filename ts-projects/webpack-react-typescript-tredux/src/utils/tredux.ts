import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider, useSelector } from "react-redux";
let currentModels = [];
/** @type {import("redux").Store} */
let currentStore = null;

export function getCurrentStore() {
  return currentStore;
}
/**
 *
 * @param {Model} models
 */
export const initModels = (models) => {
  currentModels = models;
  let reducers = {};
  let rootState = {};
  for (let model of models) {
    rootState[model.name] = model.state;
    reducers[model.name] = modelToReducer(model);
  }
  function rootReducer(state = rootState, action) {
    let res = {};
    for (let model of currentModels) {
      res[model.name] = reducers[model.name](state[model.name], action);
    }
    return res;
  }

  currentStore = createStore(rootReducer);

  const EnhancedProvider = ({ children, ...rest }) => (
    React.createElement(Provider, { store: currentStore, ...rest }, children)
  )
  return EnhancedProvider;
};

export const getModelState = (modelName) => {
  return currentStore.getState()[modelName];
};

export const dispatchModel = (modelName, methodName, ...args) => {
  if (methodName === "change") {
    currentStore.dispatch({
      type: `${modelName}/${methodName}`,
      payload: [...args],
    });
  } else {
    const model = currentModels.find((model) => model.name === modelName);
    return new Promise((resolve, reject) => {
      const fn = async () => {
        if (model && model.methods && model.methods[methodName]) {
          const state = getModelState(model.name);
          const update = (first, second) => {
            let payload
            if (typeof first === 'object') {
              payload = [first]
            } else {
              payload = [first, second]
            }
            currentStore.dispatch({
              type: `${modelName}/change`,
              payload
            })
          }
          const dispatch = (methodName, ...args) => dispatchModel(modelName, methodName, ...args)
          const getState = () => currentStore.getState()[modelName]
          const res = await model.methods[methodName]({ state, update, dispatch, getState }, ...args);
          resolve(res);
        }
        resolve(undefined);
      }
      if (window.queueMicrotask) { window.queueMicrotask(fn) } else { setTimeout(fn, 0) }
    });
  }
  return Promise.resolve();
};

/**
 *
 * @param {Model} model
 */
function modelToReducer(model) {
  const { name: nameSpace, methods = {} } = model;
  return function (state = model.state, action) {
    const { type, payload = [] } = action;
    const [targetNamespace, methodName] = type.split("/");
    if (targetNamespace === nameSpace) {
      if (methodName === "change") {
        if (payload.length === 2) {
          const key = payload[0];
          const value = payload[1];
          return { ...state, [key]: value };
        } else if (payload.length === 1) {
          try {
            return { ...state, ...payload[0] };
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
    return state;
  };
}

export const useModelState = <State, StateKey extends keyof State>(modelName: string, stateKeys: StateKey[]): {[key in StateKey]: State[key] } => useSelector(state => {
  const res: any = {}
  for (const key of stateKeys) {
    res[key] = state[modelName][key]
  }
  return res
})

export const getModelHelpers = <State, Methods>(modelName: string) => ({
  useModelState: <StateKey extends keyof State>(stateKeys: StateKey[]): {[key in StateKey]: State[key] } => useModelState(modelName, stateKeys),
  updateModel: (partialState: Partial<State>) => dispatchModel(modelName, 'change', partialState),
  dispatchModel: <MethodsKey extends keyof Methods>(methodsName: MethodsKey, ...args: ShiftAction<Parameters<Methods[MethodsKey]>>) => dispatchModel(modelName, methodsName, ...args),
  getModelState: ():State => getModelState(modelName)
})


export type MethodFirstParamFactory<State, Methods> = {
  state: State,
  update?: (partialState: Partial<State>) => void
  dispatch?: <MethodsKey extends keyof Methods>(methodName: MethodsKey, ...args: ShiftAction<Parameters<Methods[MethodsKey]>>),
  getState: () => State
}