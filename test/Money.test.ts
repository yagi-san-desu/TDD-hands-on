import { describe, it, expect } from "vitest";
import { Dollar } from "../src/Dollar";
import { Franc } from "../src/Franc";

describe("Dollar", () => {
  it("times", () => {
    const five: Dollar = new Dollar(5);
    expect(five.times(2)).toEqual(new Dollar(10));
    expect(five.times(3)).toEqual(new Dollar(15));
  });
  it("equals", () => {
    const five = new Dollar(5);
    const fiveFranc = new Franc(5);
    expect(five.equals(new Dollar(5))).toBe(true);
    expect(five.equals(new Dollar(6))).toBe(false);
    expect(five.equals(fiveFranc)).toBe(false);
  });
});

describe("Franc", () => {
  it("times", () => {
    const five = new Franc(5);
    expect(five.equals(new Franc(5))).toBe(true);
    expect(five.equals(new Franc(6))).toBe(false);
  });
  it("equals", () => {
    const five = new Franc(5);
    expect(five.equals(new Franc(5))).toBe(true);
    expect(five.equals(new Franc(6))).toBe(false);
  });
});
