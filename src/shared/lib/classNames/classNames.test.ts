import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("firstClass")).toBe("firstClass");
  });

  test("with additional class", () => {
    const expected = "firstClass secondClass thirdClass";
    expect(classNames("firstClass", {}, ["secondClass", "thirdClass"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "firstClass secondClass thirdClass hovered";
    expect(classNames(
      "firstClass",
      { hovered: true, scrollable: false },
      ["secondClass", "thirdClass"])).toBe(expected);
  });
});
