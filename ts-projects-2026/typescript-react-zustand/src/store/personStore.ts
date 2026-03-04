import { create } from 'zustand';
import type { GetGetType, GetSetType } from '../types/store';
import { getUseModelStore } from '../utils/store';
import { useCounterStore, type CounterStore } from './counterStore';
import type { PartialStoreMap } from '.';


const fn = (setAlias: any, getAlias: any) => {
  const set = (setAlias ?? (() => { })) as GetSetType<ModelStore>
  const get = (getAlias ?? (() => { })) as GetGetType<ModelStore>
  class ModelStore {
    name = "foo"

    say = ([counterStore]:[CounterStore]) => {
        console.log("counterStore", counterStore)
        console.log(`${get().name} say: current count is ${counterStore.count}`)
    }
  }
  return new ModelStore()
}

export const usePersonStore = getUseModelStore(fn);
export type PersonStore = ReturnType<typeof fn>;