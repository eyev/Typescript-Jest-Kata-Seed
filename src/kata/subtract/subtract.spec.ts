import { subtract } from "./subtract.kata";

describe('subtract', () => {
    it("should exist", () => {
        expect(subtract).toBeDefined();
    });

    it("10 - 3 should return 7", () => {
        expect(subtract(10, 3)).toBe(7);
    });
});