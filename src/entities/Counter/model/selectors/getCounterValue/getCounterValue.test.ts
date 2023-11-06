import { getCounterValue } from "./getCounterValue";
import { type StateSchema } from "app/providers/StoreProvider";

describe("getCounterValue", () => {
  test("should return counter value", () => {
    const state: StateSchema = {
      counter: { value: 10 },
      user: {}
    };
    expect(getCounterValue(state)).toEqual(10);
  });
});
