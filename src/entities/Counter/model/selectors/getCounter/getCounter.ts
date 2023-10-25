import { type StateSchema } from "app/providers/StoreProvider";
import { type CounterSchema } from "../../types/counterSchema";

export const getCounter = (state: StateSchema): CounterSchema | undefined => state.counter;
