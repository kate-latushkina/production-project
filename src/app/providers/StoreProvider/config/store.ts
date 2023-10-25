import { type EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { type StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: IS_DEV,
    preloadedState: initialState
  });
}
