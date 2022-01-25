"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSumOfDigitByRecursion = void 0;
function calculateSumOfDigitByRecursion(n) {
    if (n < 0) {
        return calculateSumOfDigitByRecursion(n * -1);
    }
    if (n < 10) {
        return n;
    }
    var rem = n % 10;
    var div = Math.floor(n / 10);
    return rem + calculateSumOfDigitByRecursion(div);
}
exports.calculateSumOfDigitByRecursion = calculateSumOfDigitByRecursion;
