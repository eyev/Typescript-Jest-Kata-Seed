import { sum } from './sum.kata';

describe('sum', () => {
    it("should exist", () => { 
        expect(sum).toBeDefined();
    });

    it("1 + 2 should equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });

});