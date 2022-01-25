import {calculateSumOfDigitByRecursion} from "./digitSum";

describe('sum of digits in a number', () =>{
    it('should calculate sum of digits in a number by recursion', () => {
        expect(calculateSumOfDigitByRecursion(111)).toBe(3);
        expect(calculateSumOfDigitByRecursion(-123)).toBe(6);
        expect(calculateSumOfDigitByRecursion(-123)).toBe(6);
    })
})