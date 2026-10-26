import { describe, expect, it } from "vitest";
import { estimateFare } from "./pricing";

describe("estimateFare", () => {
  it("base fee + 2 €/km", () => expect(estimateFare(10)).toBe(24.5));
  it("applies minimum fare", () => expect(estimateFare(1)).toBe(12));
  it("adds 20% at night", () => expect(estimateFare(10, true)).toBe(29.4));
  it("zero for invalid distance", () => expect(estimateFare(0)).toBe(0));
});
