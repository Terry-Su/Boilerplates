import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
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

  const EnhancedProvider = ({ children = [], ...rest }) => (
    <Provider store={currentStore} {...rest}>
      {children}
    </Provider>
  );
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
      setTimeout(async () => {
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
          const res = await model.methods[methodName]({ state, update, dispatch }, ...args);
          resolve(res);
        }
        resolve();
      }, 0);
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
