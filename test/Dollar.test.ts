import { describe, it, expect } from "vitest";
import { Dollar } from "../src/Dollar";

describe("Dollar", () => {
  it("times", () => {
    const five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
