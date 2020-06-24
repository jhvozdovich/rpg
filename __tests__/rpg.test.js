import { changeState } from './../src/plant.js';

describe("changeState", () => {
  test("should add a soil modifying function", () => {
    expect(changeState("soil")(5)({})).toEqual({ "soil": 5 });
  });
});