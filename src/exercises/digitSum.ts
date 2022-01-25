export function calculateSumOfDigitByRecursion(n: number): number {
    if (n < 0) {
        return calculateSumOfDigitByRecursion(n * -1);
    }

    if (n < 10) {
        return n;
    }

    const rem = n % 10;
    const div = Math.floor(n / 10);
    return rem + calculateSumOfDigitByRecursion(div);
}