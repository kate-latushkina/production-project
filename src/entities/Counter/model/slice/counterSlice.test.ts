import { counterActions, counterReducer } from "./counterSlice";
import { type CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("should return increment value", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
  });
  test("should return decrement value", () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
  });
  test("should return increment value when value undefined", () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
  });
});
