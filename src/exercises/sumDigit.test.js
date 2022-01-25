"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var digitSum_1 = require("./digitSum");
describe('sum of digits in a number', function () {
    it('should calculate sum of digits in a number by recursion', function () {
        expect((0, digitSum_1.calculateSumOfDigitByRecursion)(111)).toBe(3);
        expect((0, digitSum_1.calculateSumOfDigitByRecursion)(-123)).toBe(6);
        expect((0, digitSum_1.calculateSumOfDigitByRecursion)(-123)).toBe(6);
    });
});
